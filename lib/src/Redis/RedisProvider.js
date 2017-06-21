"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RedisManager_1 = require("./RedisManager");
class RedisProvider {
    static register() {
        return [
            {
                to_self: true,
                instance: RedisManager_1.RedisManager,
            }
        ];
    }
}
exports.RedisProvider = RedisProvider;
