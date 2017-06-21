/**
 * IOC
 */
import 'reflect-metadata';
export declare class Validator {
    private db;
    render(params: object, rules: object): Promise<void>;
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
    private resolve(value, rules, field_name);
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
    private methodRequire(value);
}
