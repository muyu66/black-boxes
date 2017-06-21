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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * IOC
 */
const Map_1 = require("../Interface/Map");
const inversify_1 = require("inversify");
require("reflect-metadata");
const NodeRedis = require("redis");
const blue_bird = require("bluebird");
let RedisManager = class RedisManager {
    constructor(config) {
        let { host, port, db, auth_pass, prefix } = config.get('redis');
        let client_opts = {
            host: host,
            port: port,
            db: db,
            auth_pass: auth_pass,
            prefix: prefix,
        };
        const redis = blue_bird.promisifyAll(NodeRedis);
        this.redis = redis.createClient(client_opts);
    }
    /**
     * 获取 Redis 实例
     *
     * @returns {RedisClientAddition}
     *
     * @memberof Redis
     */
    getRedis() {
        return this.redis;
    }
    /**
     * 测试通过区
     */
    hgetAll(key) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.redis.hgetallAsync(key);
        });
    }
    hmsetAsync(key, object) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.redis.hmsetAsync(key, object);
        });
    }
    sadd(key, object) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.redis.saddAsync(key, object);
        });
    }
    smembers(key) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.redis.smembersAsync(key);
        });
    }
    keysAsync(pattern) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.redis.keysAsync(pattern);
        });
    }
    /**
     * 获取匹配规则的所有结果的数量
     *
     * @param {string} pattern
     * @returns {Promise<number>}
     *
     * @memberof Redis
     */
    getCount(pattern) {
        return __awaiter(this, void 0, void 0, function* () {
            const array = yield this.redis.keysAsync(pattern);
            return array.length;
        });
    }
    /**
     * 未测试区
     */
    get(key) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.redis.getAsync(key);
        });
    }
    set(key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.redis.setAsync(key, value);
        });
    }
    hset(key, field, value) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.redis.hsetAsync(key, field, value);
        });
    }
    hget(items) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.redis.hgetAsync(items);
        });
    }
    lpush(items) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.redis.lpushAsync(items);
        });
    }
    lrange(items) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.redis.lrangeAsync(items);
        });
    }
};
RedisManager = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(Map_1.TYPES.IConfigManager)),
    __metadata("design:paramtypes", [Object])
], RedisManager);
exports.RedisManager = RedisManager;
