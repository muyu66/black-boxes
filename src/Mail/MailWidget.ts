import { TYPES, FACTORYS, RELATIONS, Widget } from '../Interface/Map';
import { MailManager } from './MailManager';
import { NodeMailer } from './Engine/NodeMailer';

export class MailWidget {

    static register() {

        const widgets: Widget[] = [
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

        return widgets;
    }

}