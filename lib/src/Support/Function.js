"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * IOC
 */
require("reflect-metadata");
const inversify_1 = require("inversify");
const Map_1 = require("../Interface/Map");
const _ = require("lodash");
const uuid = require("uuid/v4");
const shortId = require("shortid");
const util = require("util");
let Function = class Function {
    dump(...objs) {
        for (const obj of objs) {
            console.log(util.inspect(obj, true, 8, true));
        }
    }
    trace(...objs) {
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
    convertHour(value) {
        const values = String(value).split('.');
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
    isTestEnv() {
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
    isDebug() {
        const debug = this.config.get('server.debug');
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
    pairArrayToObject(keys, values) {
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
    objectToArray(object) {
        const res = [];
        for (const key in object) {
            res.push({ id: Number(key), name: object[key] });
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
    inRange(value, lower, upper, open_close = 'close') {
        if (open_close === 'open') {
            return _.inRange(value, lower + 1, upper);
        }
        else {
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
    isFloat(value) {
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
    getAbs(num) {
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
    getRootDir(path) {
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
    getPublicDir(path) {
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
    getStorageTemplateDir(path) {
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
    getStorageLogDir(path) {
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
    getDir(dir, path) {
        if (path === undefined)
            return process.cwd() + dir;
        return process.cwd() + `${dir}/` + path;
    }
    isUndefinedOrEmpty(value) {
        if (value !== undefined && _.trim(value) !== '')
            return false;
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
    isNo(value) {
        if (_.isUndefined(value) || _.isNull(value))
            return true;
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
    dirBack(path) {
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
    getBaseUrl(path) {
        const { url, listen } = this.config.get('server');
        if (path && path[0] !== '/') {
            path = '/' + path;
        }
        if (path) {
            return `${url}:${listen}${path}`;
        }
        return `${url}:${listen}`;
    }
    getUuid() {
        return uuid();
    }
    getShortId() {
        return shortId.generate();
    }
};
__decorate([
    inversify_1.inject(Map_1.TYPES.IConfigManager),
    __metadata("design:type", Object)
], Function.prototype, "config", void 0);
Function = __decorate([
    inversify_1.injectable()
], Function);
exports.Function = Function;
