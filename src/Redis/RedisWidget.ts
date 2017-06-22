import { RedisManager } from './RedisManager';

export class RedisWidget {

    static register() {
        return [
            {
                to_self: true,
                instance: RedisManager,
            }
        ];
    }

}