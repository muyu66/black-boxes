import { PaginateManager } from './PaginateManager';
export declare class PaginateProvider {
    static register(): {
        to_self: boolean;
        instance: typeof PaginateManager;
    }[];
}
