import { TYPES, FACTORYS } from '../Interface/Map';
import { MailManager } from './MailManager';
import { NodeMailer } from './Engine/NodeMailer';

export class MailProvider {

    static register() {
        return [
            {
                type: TYPES.IMailEngine,
                instance: MailManager,
                factory_type: FACTORYS.FIMailEngine,
            },
            {
                type: TYPES.IAmqpEngine,
                instance: NodeMailer,
                target_name: 'node_mailer',
            },
        ];
    }

}