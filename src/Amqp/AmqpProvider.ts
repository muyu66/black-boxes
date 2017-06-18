import { TYPES, FACTORYS, RELATIONS, Provider } from '../Interface/Map';
import { AmqpManager } from './AmqpManager';
import { RabbitJs } from './Engine/RabbitJs';

export class AmqpProvider {

    static register() {
        const providers: Provider[] = [
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

        return providers;
    }

}