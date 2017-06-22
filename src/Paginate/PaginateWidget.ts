import { PaginateManager } from './PaginateManager';

export class PaginateWidget {

    static register() {
        return [
            {
                to_self: true,
                instance: PaginateManager,
            }
        ];
    }

}