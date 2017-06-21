"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = require("./Validator");
class ValidatorProvider {
    static register() {
        return [
            {
                to_self: true,
                instance: Validator_1.Validator,
            }
        ];
    }
}
exports.ValidatorProvider = ValidatorProvider;
