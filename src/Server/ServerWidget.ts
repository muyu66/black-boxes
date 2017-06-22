import { TYPES, FACTORYS, RELATIONS, Widget } from '../Interface/Map';
import { ServerManager } from './ServerManager';
import { Express } from './Engine/Express';

export class ServerWidget {

    static register() {

        const widgets: Widget[] = [
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

        return widgets;
    }

}