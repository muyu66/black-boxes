/**
 * IOC
 */
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { IConfigManager } from '../Interface/IConfig';
import { TYPES } from '../Interface/Map';

import * as _ from 'lodash';
import * as uuid from 'uuid/v4';
import * as shortId from 'shortid';
import * as util from 'util';

@injectable()
export class Function {

    @inject(TYPES.IConfigManager)
    private config: IConfigManager;

    dump(...objs: any[]): void {
        for (const obj of objs) {
            console.log(util.inspect(obj, true, 8, true));
        }
    }

    trace(...objs: any[]): void {
        console.log(objs);
        console.trace(objs);
    }

    /**
     * 将 数字小时, 转换为 逻辑小时
     * 将 1.3 小时 转化为 1.5 小时
     *
     * @export
     * @param {number} value
     * @returns {number}
     * @updateTime 1492856241987
     */
    convertHour(value: number): number {
        const values: string[] = String(value).split('.');
        return Number(values[0]) + Number(values[1]) / 0.6 / 100;
    }

    /**
     * 检查当前是否是 测试 环境
     *
     * @static
     * @returns {boolean}
     *
     * @memberof $
     */
    isTestEnv(): boolean {
        if (process.env.NODE_ENV === 'test') {
            return true;
        }
        return false;
    }

    /**
     * 检查当前是否是 DEBUG 模式
     *
     * @static
     * @returns {boolean}
     *
     * @memberof $
     */
    isDebug(): boolean {
        const debug = <number>this.config.get('server.debug');
        return debug === 0 ? false : true;
    }

    /**
     * 将成对的两个数组, 打包成一个对象
     * ['a','b','c'] [1,2,3] ==> {'a':1,'b':2,'c':3}
     *
     * @static
     * @param {string[]} keys
     * @param {any[]} values
     * @returns {object}
     *
     * @memberof $
     */
    pairArrayToObject(keys: string[], values: any[]): object {
        let res = {};
        let i = 0;
        for (const key of keys) {
            res[key] = values[i];
            i++;
        }
        return res;
    }

    /**
     * 将 索引对象, 转换成 对象数组
     * {0:'aa', 1:'bb'} To [{name:'aa', id:0}, {name:'bb', id:1}]
     *
     * @static
     * @param {object} obj
     * @returns {{ name: string, id: number }[]}
     *
     * @memberof $
     */
    objectToArray(obj: object): { name: string, id: number }[] {
        const res: { name: string, id: number }[] = [];
        for (const key in obj) {
            res.push({ id: Number(key), name: obj[key] });
        }
        return res;
    }

    /**
     * 重置 lodash 方法，使之成为 inRange(4,1,4) === true
     *
     * @static
     * @param {number} value 原值
     * @param {number} lower
     * @param {number} upper
     * @returns {boolean}
     *
     * @memberOf $
     * @updateTime 1492507475434
     */
    inRange(value: number, lower: number, upper: number, open_close = 'close'): boolean {
        if (open_close === 'open') {
            return _.inRange(value, lower + 1, upper);
        } else {
            return _.inRange(value, lower, upper + 1);
        }
    }

    /**
     * 判断是否是小数
     *
     * @static
     * @param {number} value
     * @returns {boolean}
     *
     * @memberOf $
     * @updateTime 1493284579859
     */
    isFloat(value: number): boolean {
        if (_.ceil(value) === value) {
            return false;
        }
        return true;
    }

    /**
     * 取绝对值
     *
     * @static
     * @param {number} num
     * @returns {number}
     *
     * @memberOf $
     * @updateTime 1493188199606
     */
    getAbs(num: number): number {
        return num >= 0 ? num : -num;
    }

    /**
     * 获取根目录
     *
     * @static
     * @returns {string}
     *
     * @memberof $
     */
    getRootDir(path?: string): string {
        const dir = '/';
        return this.getDir(dir, path);
    }

    /**
     * 获取 Public 目录
     *
     * @static
     * @param {string} [path]
     * @returns {string}
     *
     * @memberof $
     */
    getPublicDir(path?: string): string {
        const dir = '/public';
        return this.getDir(dir, path);
    }

    /**
     * 获取 模板 目录
     *
     * @static
     * @param {string} [path]
     * @returns {string}
     *
     * @memberof $
     */
    getStorageTemplateDir(path?: string): string {
        const dir = '/storage/templates';
        return this.getDir(dir, path);
    }

    /**
     * 获取 日志 目录
     *
     * @static
     * @param {string} [path]
     * @returns {string}
     *
     * @memberof $
     */
    getStorageLogDir(path?: string): string {
        const dir = '/storage/logs';
        return this.getDir(dir, path);
    }

    /**
     * 获取目录 Core
     *
     * @private
     * @static
     * @param {string} dir 指定目录
     * @param {string} [path] 具体文件名
     * @returns {string}
     *
     * @memberof $
     */
    private getDir(dir: string, path?: string): string {
        if (path === undefined) return process.cwd() + dir;
        return process.cwd() + `${dir}/` + path;
    }

    isUndefinedOrEmpty(value: any): boolean {
        if (value !== undefined && _.trim(value) !== '') return false;
        return true;
    }

    /**
     * 是 undefined 或者 null
     *
     * @static
     * @param {*} value
     * @returns {boolean}
     *
     * @memberof $
     */
    isNo(value: any): boolean {
        if (_.isUndefined(value) || _.isNull(value)) return true;
        return false;
    }

    /**
     * 将字符串目录, 向上返回一级
     *
     * @static
     * @param {string} path
     * @returns {string}
     *
     * @memberof $
     */
    dirBack(path: string): string {
        let paths = path.split('/');
        paths = _.take(paths, paths.length - 1);
        return paths.join('/');
    }

    /**
     * 获取基路径
     *
     * @static
     * @param {string} [path] 自适应路径
     * @returns {string}
     *
     * @memberof $
     */
    getBaseUrl(path?: string): string {
        const { url, listen } = this.config.get('server');
        if (path && path[0] !== '/') {
            path = '/' + path;
        }
        if (path) {
            return `${url}:${listen}${path}`;
        }
        return `${url}:${listen}`;
    }

    getUuid(): string {
        return uuid();
    }

    getShortId(): string {
        return shortId.generate();
    }

}