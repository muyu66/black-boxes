import { TYPES, FACTORYS, RELATIONS } from '../Interface/Map';
import { MailManager } from './MailManager';
import { NodeMailer } from './Engine/NodeMailer';

export class MailProvider {

    static register() {
        return [
            {
                type: TYPES.IMailEngine,
                instance: NodeMailer,
                target_name: 'node_mailer',
            },
            {
                type: FACTORYS.FIMail,
                instance: MailManager,
            },
            {
                type: TYPES.IMailEngine,
                factory_type: RELATIONS.FIMailEngine,
            },
        ];
    }

}