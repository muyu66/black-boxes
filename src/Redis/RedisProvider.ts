import { RedisManager } from './RedisManager';

export class RedisProvider {

    static register() {
        return [
            {
                to_self: true,
                instance: RedisManager,
            }
        ];
    }

}