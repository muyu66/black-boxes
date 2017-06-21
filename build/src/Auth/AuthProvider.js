"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Map_1 = require("../Interface/Map");
const AuthManager_1 = require("./AuthManager");
class AuthProvider {
    static register() {
        return [
            {
                type: Map_1.TYPES.IAuthManager,
                instance: AuthManager_1.AuthManager,
            }
        ];
    }
}
exports.AuthProvider = AuthProvider;
