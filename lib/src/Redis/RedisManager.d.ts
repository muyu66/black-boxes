import { IConfigManager } from '../Interface/IConfig';
import 'reflect-metadata';
import * as NodeRedis from 'redis';
/**
 * 补充 Redis 异步写法
 *
 * @interface RedisClientAddition
 * @extends {RedisClient}
 */
export interface RedisClientAddition extends NodeRedis.RedisClient {
    /**
     * 写入字符串
     *
     * @param {string} key 键
     * @param {string} value 值
     * @returns {Promise<void>}
     *
     * @memberof RedisClientAddition
     */
    setAsync(key: string, value: string): Promise<void>;
    getAsync(key: string): Promise<string>;
    /**
     * 写入哈希
     *
     * @param {any} key 键
     * @param {any} field 字段
     * @param {any} value 字段值
     * @returns {Promise<void>}
     *
     * @memberof RedisClientAddition
     */
    hsetAsync(key: any, field: any, value: any): Promise<void>;
    /**
     * 批量写入哈希
     *
     * @param {any} key 键
     * @param {any} object 字段 字段值 的 对象
     * @returns {Promise<void>}
     *
     * @memberof RedisClientAddition
     */
    hmsetAsync(key: any, object: any): Promise<void>;
    hgetAsync(items: any[]): Promise<any[]>;
    lpushAsync(items: any[]): Promise<void>;
    lrangeAsync(items: any[]): Promise<any[]>;
    hgetallAsync(key: any): Promise<any>;
    saddAsync(key: string, ...object: any[]): Promise<any>;
    smembersAsync(key: string): Promise<any>;
    keysAsync(pattern: string): Promise<any[]>;
    getCount(pattern: string): Promise<number>;
}
export declare class RedisManager {
    private redis;
    constructor(config: IConfigManager);
    /**
     * 获取 Redis 实例
     *
     * @returns {RedisClientAddition}
     *
     * @memberof Redis
     */
    getRedis(): RedisClientAddition;
    /**
     * 测试通过区
     */
    hgetAll(key: any): Promise<any>;
    hmsetAsync(key: any, object: any): Promise<void>;
    sadd(key: string, object: any): Promise<any[]>;
    smembers(key: string): Promise<any[]>;
    keysAsync(pattern: string): Promise<any[]>;
    /**
     * 获取匹配规则的所有结果的数量
     *
     * @param {string} pattern
     * @returns {Promise<number>}
     *
     * @memberof Redis
     */
    getCount(pattern: string): Promise<number>;
    /**
     * 未测试区
     */
    get(key: string): Promise<string>;
    set(key: string, value: string): Promise<void>;
    hset(key: any, field: any, value: any): Promise<void>;
    hget(items: any[]): Promise<any[]>;
    lpush(items: any[]): Promise<void>;
    lrange(items: any[]): Promise<any[]>;
}
