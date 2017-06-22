import { TYPES } from '../Interface/Map';
import { DatabaseManager } from './DatabaseManager';

export class DatabaseWidget {

    static register() {
        return [
            {
                type: TYPES.IDatabaseManager,
                instance: DatabaseManager,
                singleton: true,
            }
        ];
    }

}