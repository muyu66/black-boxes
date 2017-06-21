"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * IOC
 */
require("reflect-metadata");
const inversify_1 = require("inversify");
const Map_1 = require("../Interface/Map");
const Account_1 = require("../Database/Model/Account");
let AuthManager = class AuthManager {
    /**
     * 获取已登录的用户帐号信息
     *
     * @returns {Promise<Account>}
     *
     * @memberof AuthManager
     */
    user() {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield this.db.getConnection();
            const account = yield db.getRepository(Account_1.Account)
                .findOne({ is_deleted: 0, id: this.account_id });
            return account;
        });
    }
    check() {
    }
    createPassword(source) {
        return this.encrypter.make(source);
    }
    attempt(auth) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield this.db.getConnection();
            const account = yield db.getRepository(Account_1.Account)
                .findOne({ is_deleted: 0, account: auth.account });
            if (!account) {
                return false;
            }
            if (!account || account.password !== this.encrypter.make(auth.password)) {
                return false;
            }
            return account;
        });
    }
    logout() {
    }
    // 可以使用 viaRemember 方法来检查这个用户是否使用「记住我」 cookie 来做认证
    viaRemember() {
    }
    login(account) {
    }
    loginUsingId(account_id) {
        this.account_id = account_id;
    }
};
__decorate([
    inversify_1.inject(Map_1.TYPES.IEncrypter),
    __metadata("design:type", Object)
], AuthManager.prototype, "encrypter", void 0);
__decorate([
    inversify_1.inject(Map_1.TYPES.IDatabaseManager),
    __metadata("design:type", Object)
], AuthManager.prototype, "db", void 0);
AuthManager = __decorate([
    inversify_1.injectable()
], AuthManager);
exports.AuthManager = AuthManager;
