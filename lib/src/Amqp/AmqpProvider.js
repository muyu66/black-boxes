"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Map_1 = require("../Interface/Map");
const AmqpManager_1 = require("./AmqpManager");
const RabbitJs_1 = require("./Engine/RabbitJs");
class AmqpProvider {
    static register() {
        const providers = [
            {
                type: Map_1.TYPES.IAmqpEngine,
                instance: RabbitJs_1.RabbitJs,
                target_name: 'rabbit_js',
                singleton: true,
            },
            {
                type: Map_1.FACTORYS.FIAmqp,
                instance: AmqpManager_1.AmqpManager,
            },
            {
                type: Map_1.TYPES.IAmqpEngine,
                factory_type: Map_1.RELATIONS.FIAmqpEngine,
            },
        ];
        return providers;
    }
}
exports.AmqpProvider = AmqpProvider;
