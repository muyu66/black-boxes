import { DatabaseManager } from './DatabaseManager';
export declare class DatabaseProvider {
    static register(): {
        type: symbol;
        instance: typeof DatabaseManager;
        singleton: boolean;
    }[];
}
