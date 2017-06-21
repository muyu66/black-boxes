"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Map_1 = require("../Interface/Map");
const DatabaseManager_1 = require("./DatabaseManager");
class DatabaseProvider {
    static register() {
        return [
            {
                type: Map_1.TYPES.IDatabaseManager,
                instance: DatabaseManager_1.DatabaseManager,
                singleton: true,
            }
        ];
    }
}
exports.DatabaseProvider = DatabaseProvider;
