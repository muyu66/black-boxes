/**
 * IOC
 */
import { TYPES } from '../Interface/Map';
import { IConfigManager } from '../Interface/IConfig';
import { injectable, inject } from 'inversify';
import 'reflect-metadata';

import * as NodeRedis from 'redis';
import * as blue_bird from 'bluebird';

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
    hsetAsync(key, field, value): Promise<void>;
    /**
     * 批量写入哈希
     *
     * @param {any} key 键
     * @param {any} object 字段 字段值 的 对象
     * @returns {Promise<void>}
     *
     * @memberof RedisClientAddition
     */
    hmsetAsync(key, object): Promise<void>;
    hgetAsync(items: any[]): Promise<any[]>;
    lpushAsync(items: any[]): Promise<void>;
    lrangeAsync(items: any[]): Promise<any[]>;

    hgetallAsync(key): Promise<any>;
    saddAsync(key: string, ...object: any[]): Promise<any>;
    smembersAsync(key: string): Promise<any>;
    keysAsync(pattern: string): Promise<any[]>;
    getCount(pattern: string): Promise<number>;
}

export class RedisManager {

    @inject(TYPES.IConfigManager)
    private config: IConfigManager;

    private redis: RedisClientAddition;

    constructor() {
        let { host, port, db, auth_pass, prefix }: any = this.config.get('redis');
        let client_opts: NodeRedis.ClientOpts = {
            host: host,
            port: port,
            db: db,
            auth_pass: auth_pass,
            prefix: prefix,
        };

        const redis: any = blue_bird.promisifyAll(NodeRedis);
        this.redis = redis.createClient(client_opts);
    }

    /**
     * 获取 Redis 实例
     *
     * @returns {RedisClientAddition}
     *
     * @memberof Redis
     */
    getRedis(): RedisClientAddition {
        return this.redis;
    }

    /**
     * 测试通过区
     */

    async hgetAll(key): Promise<any> {
        return await this.redis.hgetallAsync(key);
    }

    async hmsetAsync(key, object): Promise<void> {
        return await this.redis.hmsetAsync(key, object);
    }

    async sadd(key: string, object: any): Promise<any[]> {
        return await this.redis.saddAsync(key, object);
    }

    async smembers(key: string): Promise<any[]> {
        return await this.redis.smembersAsync(key);
    }

    async keysAsync(pattern: string): Promise<any[]> {
        return await this.redis.keysAsync(pattern);
    }

    /**
     * 获取匹配规则的所有结果的数量
     *
     * @param {string} pattern
     * @returns {Promise<number>}
     *
     * @memberof Redis
     */
    async getCount(pattern: string): Promise<number> {
        const array = await this.redis.keysAsync(pattern);
        return array.length;
    }

    /**
     * 未测试区
     */

    async get(key: string): Promise<string> {
        return await this.redis.getAsync(key);
    }

    async set(key: string, value: string): Promise<void> {
        return await this.redis.setAsync(key, value);
    }

    async hset(key, field, value): Promise<void> {
        return await this.redis.hsetAsync(key, field, value);
    }

    async hget(items: any[]): Promise<any[]> {
        return await this.redis.hgetAsync(items);
    }

    async lpush(items: any[]): Promise<void> {
        return await this.redis.lpushAsync(items);
    }

    async lrange(items: any[]): Promise<any[]> {
        return await this.redis.lrangeAsync(items);
    }

}