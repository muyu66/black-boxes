"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Map_1 = require("../Interface/Map");
const ExcelManager_1 = require("./ExcelManager");
class ExcelProvider {
    static register() {
        const providers = [
            {
                type: Map_1.TYPES.IExcelManager,
                instance: ExcelManager_1.ExcelManager,
                singleton: true,
            }
        ];
        return providers;
    }
}
exports.ExcelProvider = ExcelProvider;
