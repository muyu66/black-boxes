"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Map_1 = require("../Interface/Map");
const ConfigManager_1 = require("./ConfigManager");
class ConfigProvider {
    static register() {
        const providers = [
            {
                type: Map_1.TYPES.IConfigManager,
                instance: ConfigManager_1.ConfigManager,
                singleton: true,
            }
        ];
        return providers;
    }
}
exports.ConfigProvider = ConfigProvider;
