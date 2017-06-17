import { PaginateManager } from './PaginateManager';

export class PaginateProvider {

    static register() {
        return [
            {
                to_self: true,
                instance: PaginateManager,
            }
        ];
    }

}