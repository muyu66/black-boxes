import { TYPES, FACTORYS, RELATIONS, Provider } from '../Interface/Map';
import { MailManager } from './MailManager';
import { NodeMailer } from './Engine/NodeMailer';

export class MailProvider {

    static register() {

        const providers: Provider[] = [
            {
                type: TYPES.IMailEngine,
                instance: NodeMailer,
                target_name: 'node_mailer',
                singleton: true,
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

        return providers;
    }

}