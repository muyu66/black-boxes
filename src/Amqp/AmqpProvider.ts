import { TYPES, FACTORYS } from '../Interface/Map';
import { AmqpManager } from './AmqpManager';
import { RabbitJs } from './Engine/RabbitJs';

export class AmqpProvider {

    static register() {
        return [
            {
                type: TYPES.IAmqpEngine,
                instance: AmqpManager,
                factory_type: FACTORYS.FIAmqpEngine,
            },
            {
                type: TYPES.IAmqpEngine,
                instance: RabbitJs,
                target_name: 'rabbit_js',
            },
        ];
    }

}