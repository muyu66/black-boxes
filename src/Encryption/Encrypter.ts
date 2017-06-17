/**
 * IOC
 */
import { TYPES } from '../Interface/Map';
import { IConfigManager } from '../Interface/IConfig';
import { injectable, inject } from 'inversify';
import 'reflect-metadata';

import { IEncrypter } from '../Interface/IEncryption';
import * as crypto from 'crypto';


/**
 * 加密模块
 *
 * @export
 * @class Encrypt
 */
@injectable()
export class Encrypter implements IEncrypter {

    /**
     * 密钥
     *
     * @private
     * @type {string}
     * @memberof Encrypt
     */
    private key: string;

    constructor( @inject(TYPES.IConfigManager) config: IConfigManager) {
        this.key = config.get('server.key');
    }

    /**
     * 获取密钥
     *
     * @private
     *
     * @memberof Encrypt
     */
    public getKey(): string {
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
    private salt(source: string, op: 'unwrap' | 'wrap' = 'wrap'): string {
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
    public encrypt(source: string): string {
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
    public decrypt(source: string): string {
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
    public make(source: string): string {
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
    public check(source: string, now: string): boolean {
        return this.make(source) === now;
    }

}