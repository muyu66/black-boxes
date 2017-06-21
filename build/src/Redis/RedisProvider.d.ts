import { RedisManager } from './RedisManager';
export declare class RedisProvider {
    static register(): {
        to_self: boolean;
        instance: typeof RedisManager;
    }[];
}
