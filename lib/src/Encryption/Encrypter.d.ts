import { IConfigManager } from '../Interface/IConfig';
import 'reflect-metadata';
import { IEncrypter } from '../Interface/IEncryption';
/**
 * 加密模块
 *
 * @export
 * @class Encrypt
 */
export declare class Encrypter implements IEncrypter {
    /**
     * 密钥
     *
     * @private
     * @type {string}
     * @memberof Encrypt
     */
    private key;
    constructor(config: IConfigManager);
    /**
     * 获取密钥
     *
     * @private
     *
     * @memberof Encrypt
     */
    getKey(): string;
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
    private salt(source, op?);
    /**
     * 可逆加密
     *
     * @static
     * @param {string} source
     * @returns {string}
     *
     * @memberof Encrypt
     */
    encrypt(source: string): string;
    /**
     * 可逆解密
     *
     * @static
     * @param {string} source
     * @returns {string}
     *
     * @memberof Encrypt
     */
    decrypt(source: string): string;
    /**
     * 创建不可逆加密
     *
     * @static
     * @param {string} source
     * @returns {string}
     *
     * @memberof Encrypt
     */
    make(source: string): string;
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
    check(source: string, now: string): boolean;
}
