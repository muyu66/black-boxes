import { TYPES, FACTORYS, RELATIONS, Widget } from '../Interface/Map';
import { AmqpManager } from './AmqpManager';
import { RabbitJs } from './Engine/RabbitJs';

export class AmqpWidget {

    static register() {
        const widgets: Widget[] = [
            {
                type: TYPES.IAmqpEngine,
                instance: RabbitJs,
                target_name: 'rabbit_js',
                singleton: true,
            },
            {
                type: FACTORYS.FIAmqp,
                instance: AmqpManager,
            },
            {
                type: TYPES.IAmqpEngine,
                factory_type: RELATIONS.FIAmqpEngine,
            },
        ];

        return widgets;
    }

}