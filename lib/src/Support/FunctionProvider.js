"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Function_1 = require("./Function");
class FunctionProvider {
    static register() {
        return [
            {
                to_self: true,
                instance: Function_1.Function,
            }
        ];
    }
}
exports.FunctionProvider = FunctionProvider;
