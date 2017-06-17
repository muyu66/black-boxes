/**
 * IOC
 */
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { IDatabaseManager } from '../Interface/IDatabase';
import { TYPES } from '../Interface/Map';

import { ValidationException } from './ValidationException';
import * as _ from 'lodash';

@injectable()
export class Validator {

    @inject(TYPES.IDatabaseManager)
    private db: IDatabaseManager;

    async render(params: object, rules: object): Promise<void> {
        const keys: string[] = _.keys(rules);
        const values: any[] = _.values(rules);

        for (let i in keys) {
            /**
             * v 套用的规则 is:fund:insurance:tax:salary:penalty:bonus|num|xxx
             * params[k] 被套用的参数值
             * k 参数名
             */
            // 如果规则中有可以为 null，则直接跳过之后的所有判断
            if (values[i].split('|')[0] === 'null' && (params[keys[i]] === undefined || _.isNull(params[keys[i]]))) {
                continue;
            } else {
                await this.resolve(params[keys[i]], values[i].split('|'), keys[i]).catch((err) => {
                    // console.log(err);
                    throw err;
                });
            }
        }
    }

    /**
     *
     *
     * @private
     * @param {string} value 被套用的参数值
     * @param {string[]} rules 单条规则分段数组
     * @returns
     *
     * @memberOf Validator
     */
    private async resolve(value: string, rules: string[], field_name: string): Promise<void> {
        for (let rule of rules) {
            let v = rule.split(':');

            const rule_name = _.isArray(v) ? v[0] : rule;

            switch (rule_name) {
                // len:1:2 => v[0]:v[1]:v[2] 以此类推
                // min 4 max 10 意味着 4 <= i <= 10
                case 'len':
                    if (!_.inRange(Number(value), Number(v[1]), Number(v[2]) + 1)) {
                        throw new ValidationException(rule_name, { field: field_name });
                    }
                    break;
                // rangeIn:1:4    范围是 2,3
                case 'rangeIn':
                    if (!_.inRange(Number(value), Number(v[1]) + 1, Number(v[2]))) {
                        throw new ValidationException(rule_name, { field: field_name, min: Number(v[1]) + 1, max: Number(v[2]) - 1 });
                    }
                    break;
                // range:1:3    范围是 1,2,3
                case 'range':
                    if (!_.inRange(Number(value), Number(v[1]), Number(v[2]) + 1)) {
                        throw new ValidationException(rule_name, { field: field_name, value: Number(value), min: Number(v[1]), max: Number(v[2]) });
                    }
                    break;
                case 'money':
                    if (_.isNaN(Number(value))) {
                        throw new ValidationException(rule_name, { field: field_name });
                    }
                    if (Number(value) < 0) {
                        throw new ValidationException(rule_name, { field: field_name, debug: v[1] });
                    }
                    break;
                case 'is':
                    if (_.indexOf(_.tail(v), String(value)) === -1) {
                        throw new ValidationException(rule_name, { field: field_name, debug: value });
                    }
                    break;
                case 'not':
                    if (_.indexOf(_.tail(v), String(value)) !== -1) {
                        throw new ValidationException(rule_name, { field: field_name, debug: value });
                    }
                    break;
                case 'array':
                    // FIXME:
                    if (!_.isArray(value)) {
                        throw new ValidationException(rule_name, { field: field_name });
                    }
                    // FIXME:
                    if (_.uniq(value).length !== value.length) {
                        throw new ValidationException(rule_name, { field: field_name });
                    }
                    break;
                case 'array_range':
                    for (const item of value) {
                        if (!_.inRange(Number(item), Number(v[1]), Number(v[2]) + 1)) {
                            throw new ValidationException(rule_name, { field: field_name, value: Number(value), min: Number(v[1]), max: Number(v[2]) });
                        }
                    }
                    break;
                case 'require':
                    if (!this.methodRequire(value)) {
                        throw new ValidationException(rule_name, { field: field_name });
                    }
                    break;
                case 'abandon':
                    if (this.methodRequire(value)) {
                        throw new ValidationException(rule_name, { field: field_name });
                    }
                    break;
                case 'numeric':
                    if (_.isNaN(Number(value))) {
                        throw new ValidationException(rule_name, { field: field_name });
                    }
                    break;
                case 'percentage':
                    const tmp_percentage: number = Number(value);
                    if (!_.isNumber(tmp_percentage) || tmp_percentage > 1) {
                        throw new ValidationException(rule_name, { field: field_name });
                    }
                    break;
                case 'date':
                    if (!_.isDate(new Date(value))) {
                        throw new ValidationException(rule_name, { field: field_name });
                    }
                    break;
                case 'regex':
                    let re: RegExp;
                    switch (v[1]) {
                        // 03:00, 23:00 类似, 兼容 3:00, 23:00
                        case 'hour_minute':
                            re = new RegExp('^([0]?[0-9]|[1][0-9]|[2][0-3]):([0-9]|[0-5][0-9])$');
                            break;
                        case 'sign_range':
                            re = new RegExp('^[0-7](\\.[05])?|8(\\.[0])?$');
                            break;
                        // 区分真实手机号，正式环境不用11号段
                        case 'mobile':
                            re = new RegExp('^1(3|4|5|7|8)[0-9]{9}$');
                            break;
                        // 范围在 0 - 16, 单位为 0.5
                        case 'over_time_during':
                            re = new RegExp('^([1-9]|[1][0-5])(\\.[05])?$|^16(\\.0)?$|^0(\\.5)?$');
                            break;
                        default:
                            re = new RegExp('.*');
                    }
                    if (!re.test(String(value))) {
                        throw new ValidationException(rule_name, { field: field_name, debug: value });
                    }
                    break;
                case '>=':
                    if (Number(value) < Number(v[1])) {
                        throw new ValidationException(rule_name, { field: field_name, debug: v[1] });
                    }
                    break;
                case '<=':
                    if (Number(value) > Number(v[1])) {
                        throw new ValidationException(rule_name, { field: field_name, debug: v[1] });
                    }
                    break;
                case '>':
                    if (Number(value) <= Number(v[1])) {
                        throw new ValidationException(rule_name, { field: field_name, debug: v[1] });
                    }
                    break;
                case '<':
                    if (Number(value) >= Number(v[1])) {
                        throw new ValidationException(rule_name, { field: field_name, debug: v[1] });
                    }
                    break;
                /**
                 * 'db_exist:Department:7:'
                 * 在 Department 这个表里，是否存在
                 */
                case 'db_exist':
                    const db = await this.db.getConnection();
                    let model;
                    if (Number(v[4]) === 0) {
                        model = await db.getRepository(v[1])
                            .createQueryBuilder('m')
                            .where('m.is_deleted=0')
                            .andWhere('m.id=:id', { id: Number(v[2]) })
                            .andWhere('(m.corp_id=:corp_id or m.corp_id=0)', { corp_id: Number(v[3]) })
                            .getCount();
                    } else if (v[3] === undefined) {
                        model = db.getRepository(v[1])
                            .createQueryBuilder('m')
                            .where('m.is_deleted=0')
                            .andWhere('m.id=:id', { id: Number(v[2]) })
                            .getCount();
                    } else {
                        model = db.getRepository(v[1])
                            .createQueryBuilder('m')
                            .where('m.is_deleted=0')
                            .andWhere('m.id=:id', { id: Number(v[2]) })
                            .andWhere('m.corp_id=:corp_id', { corp_id: Number(v[3]) })
                            .getCount();
                    }
                    // 不存在相对应的数据
                    if (model === 0) {
                        throw new ValidationException(rule_name, { field: field_name, id: Number(v[3]), model: v[1].toString(), corpId: Number(v[3]) });
                    }
                    break;
                /**
                 * 动态验证规则，如果CASE到这一步，表示代码逻辑出现问题
                 */
                case 'dynamic':
                    throw new ValidationException(rule_name, { field: field_name, debug: v });
                default:
                    throw Error('未知规则');
            }
        }
    }

    /**
     *
     *
     * @private
     * @param {string} value
     * @returns true 代表通过 ; false 代表不符合
     *
     * @memberOf Validator
     * @updateTime 1490683010394
     */
    private methodRequire(value: string) {
        if (value === undefined || value === null) {
            return false;
        }
        return true;
    }

}