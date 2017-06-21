"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Map_1 = require("../Interface/Map");
const MailManager_1 = require("./MailManager");
const NodeMailer_1 = require("./Engine/NodeMailer");
class MailProvider {
    static register() {
        const providers = [
            {
                type: Map_1.TYPES.IMailEngine,
                instance: NodeMailer_1.NodeMailer,
                target_name: 'node_mailer',
                singleton: true,
            },
            {
                type: Map_1.FACTORYS.FIMail,
                instance: MailManager_1.MailManager,
            },
            {
                type: Map_1.TYPES.IMailEngine,
                factory_type: Map_1.RELATIONS.FIMailEngine,
            },
        ];
        return providers;
    }
}
exports.MailProvider = MailProvider;
