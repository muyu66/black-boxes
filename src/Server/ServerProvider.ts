import { TYPES, FACTORYS, RELATIONS, Provider } from '../Interface/Map';
import { ServerManager } from './ServerManager';
import { Express } from './Engine/Express';

export class ServerProvider {

    static register() {

        const providers: Provider[] = [
            {
                type: TYPES.IServerEngine,
                instance: Express,
                target_name: 'express',
                singleton: true,
            },
            {
                type: FACTORYS.FIServer,
                instance: ServerManager,
            },
            {
                type: TYPES.IServerEngine,
                factory_type: RELATIONS.FIServerEngine,
            },
        ];

        return providers;
    }

}