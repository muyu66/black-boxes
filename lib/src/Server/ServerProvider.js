"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Map_1 = require("../Interface/Map");
const ServerManager_1 = require("./ServerManager");
const Express_1 = require("./Engine/Express");
class ServerProvider {
    static register() {
        const providers = [
            {
                type: Map_1.TYPES.IServerEngine,
                instance: Express_1.Express,
                target_name: 'express',
                singleton: true,
            },
            {
                type: Map_1.FACTORYS.FIServer,
                instance: ServerManager_1.ServerManager,
            },
            {
                type: Map_1.TYPES.IServerEngine,
                factory_type: Map_1.RELATIONS.FIServerEngine,
            },
        ];
        return providers;
    }
}
exports.ServerProvider = ServerProvider;
