"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Map_1 = require("../Interface/Map");
const Encrypter_1 = require("./Encrypter");
class EncryptionProvider {
    static register() {
        return [
            {
                type: Map_1.TYPES.IEncrypter,
                instance: Encrypter_1.Encrypter,
            }
        ];
    }
}
exports.EncryptionProvider = EncryptionProvider;
