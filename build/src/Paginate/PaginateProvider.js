"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PaginateManager_1 = require("./PaginateManager");
class PaginateProvider {
    static register() {
        return [
            {
                to_self: true,
                instance: PaginateManager_1.PaginateManager,
            }
        ];
    }
}
exports.PaginateProvider = PaginateProvider;
