/**
 * IOC
 */
import 'reflect-metadata';
export declare class Function {
    private config;
    dump(...objs: any[]): void;
    trace(...objs: any[]): void;
    /**
     * 将 数字小时, 转换为 逻辑小时
     * 将 1.3 小时 转化为 1.5 小时
     *
     * @export
     * @param {number} value
     * @returns {number}
     * @updateTime 1492856241987
     */
    convertHour(value: number): number;
    /**
     * 检查当前是否是 测试 环境
     *
     * @static
     * @returns {boolean}
     *
     * @memberof $
     */
    isTestEnv(): boolean;
    /**
     * 检查当前是否是 DEBUG 模式
     *
     * @static
     * @returns {boolean}
     *
     * @memberof $
     */
    isDebug(): boolean;
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
    pairArrayToObject(keys: string[], values: any[]): object;
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
    objectToArray(object: Object): {
        name: string;
        id: number;
    }[];
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
    inRange(value: number, lower: number, upper: number, open_close?: string): boolean;
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
    isFloat(value: number): boolean;
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
    getAbs(num: number): number;
    /**
     * 获取根目录
     *
     * @static
     * @returns {string}
     *
     * @memberof $
     */
    getRootDir(path?: string): string;
    /**
     * 获取 Public 目录
     *
     * @static
     * @param {string} [path]
     * @returns {string}
     *
     * @memberof $
     */
    getPublicDir(path?: string): string;
    /**
     * 获取 模板 目录
     *
     * @static
     * @param {string} [path]
     * @returns {string}
     *
     * @memberof $
     */
    getStorageTemplateDir(path?: string): string;
    /**
     * 获取 日志 目录
     *
     * @static
     * @param {string} [path]
     * @returns {string}
     *
     * @memberof $
     */
    getStorageLogDir(path?: string): string;
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
    private getDir(dir, path?);
    isUndefinedOrEmpty(value: any): boolean;
    /**
     * 是 undefined 或者 null
     *
     * @static
     * @param {*} value
     * @returns {boolean}
     *
     * @memberof $
     */
    isNo(value: any): boolean;
    /**
     * 将字符串目录, 向上返回一级
     *
     * @static
     * @param {string} path
     * @returns {string}
     *
     * @memberof $
     */
    dirBack(path: string): string;
    /**
     * 获取基路径
     *
     * @static
     * @param {string} [path] 自适应路径
     * @returns {string}
     *
     * @memberof $
     */
    getBaseUrl(path?: string): string;
    getUuid(): string;
    getShortId(): string;
}
