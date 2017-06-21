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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * IOC
 */
const Map_1 = require("../Interface/Map");
const inversify_1 = require("inversify");
require("reflect-metadata");
const crypto = require("crypto");
/**
 * 加密模块
 *
 * @export
 * @class Encrypt
 */
let Encrypter = class Encrypter {
    constructor(config) {
        this.key = config.get('server.key');
    }
    /**
     * 获取密钥
     *
     * @private
     *
     * @memberof Encrypt
     */
    getKey() {
        // FIXME: 密钥补全
        return this.key;
    }
    /**
     * 加盐, 解盐
     *
     * @private
     * @static
     * @param {string} source
     * @param {('unwrap' | 'wrap')} [op='wrap']
     * @returns {string}
     *
     * @memberof Encrypt
     */
    salt(source, op = 'wrap') {
        if (op === 'unwrap') {
            const salt = source.substr(0, source.length - 13);
            return salt;
        }
        const salt = source + String(new Date().getTime());
        return salt;
    }
    /**
     * 可逆加密
     *
     * @static
     * @param {string} source
     * @returns {string}
     *
     * @memberof Encrypt
     */
    encrypt(source) {
        const cipher = crypto.createCipher('aes192', this.key);
        let res = cipher.update(this.salt(source), 'utf8', 'hex');
        res += cipher.final('hex');
        return res;
    }
    /**
     * 可逆解密
     *
     * @static
     * @param {string} source
     * @returns {string}
     *
     * @memberof Encrypt
     */
    decrypt(source) {
        const decipher = crypto.createDecipher('aes192', this.key);
        let res = decipher.update(source, 'hex', 'utf8');
        res += decipher.final('utf8');
        return this.salt(res, 'unwrap');
    }
    /**
     * 创建不可逆加密
     *
     * @static
     * @param {string} source
     * @returns {string}
     *
     * @memberof Encrypt
     */
    make(source) {
        const hash = crypto.createHmac('sha1', this.key);
        hash.update(source);
        const res = hash.digest('base64');
        return res;
    }
    /**
     * 根据哈希值验证密码
     *
     * @static
     * @param {string} source
     * @param {string} now
     * @returns {boolean} true:相同 false:不同
     *
     * @memberof Encrypt
     */
    check(source, now) {
        return this.make(source) === now;
    }
};
Encrypter = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(Map_1.TYPES.IConfigManager)),
    __metadata("design:paramtypes", [Object])
], Encrypter);
exports.Encrypter = Encrypter;
