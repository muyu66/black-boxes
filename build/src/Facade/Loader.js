"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 通用
 */
const Map_1 = require("../Interface/Map");
const Facade_1 = require("./Facade");
/**
 * 各种 Facade 的实例
 */
const PaginateManager_1 = require("../Paginate/PaginateManager");
const RedisManager_1 = require("../Redis/RedisManager");
const Validator_1 = require("../Validation/Validator");
const Function_1 = require("../Support/Function");
function Encryption() {
    return Facade_1.Facade.get().resolve(Map_1.TYPES.IEncrypter);
}
exports.Encryption = Encryption;
function Config() {
    return Facade_1.Facade.get().resolve(Map_1.TYPES.IConfigManager);
}
exports.Config = Config;
function AmqpFactory() {
    return Facade_1.Facade.get().resolve(Map_1.FACTORYS.FIAmqp);
}
function Amqp() {
    return AmqpFactory().createEngine();
}
exports.Amqp = Amqp;
function Auth() {
    return Facade_1.Facade.get().resolve(Map_1.TYPES.IAuthManager);
}
exports.Auth = Auth;
function Database() {
    return Facade_1.Facade.get().resolve(Map_1.TYPES.IDatabaseManager);
}
exports.Database = Database;
function Excel() {
    return Facade_1.Facade.get().resolve(Map_1.TYPES.IExcelManager);
}
exports.Excel = Excel;
function MailFactory() {
    return Facade_1.Facade.get().resolve(Map_1.FACTORYS.FIMail);
}
function Mail() {
    return MailFactory().createEngine();
}
exports.Mail = Mail;
function Paginate() {
    return Facade_1.Facade.get().resolve(PaginateManager_1.PaginateManager);
}
exports.Paginate = Paginate;
function Redis() {
    return Facade_1.Facade.get().resolve(RedisManager_1.RedisManager);
}
exports.Redis = Redis;
function Validation() {
    return Facade_1.Facade.get().resolve(Validator_1.Validator);
}
exports.Validation = Validation;
function $() {
    return Facade_1.Facade.get().resolve(Function_1.Function);
}
exports.$ = $;
function Pinyin() {
    return Facade_1.Facade.get().resolve(Map_1.TYPES.IPinyin);
}
exports.Pinyin = Pinyin;
function ServerFactory() {
    return Facade_1.Facade.get().resolve(Map_1.FACTORYS.FIServer);
}
function Server() {
    return ServerFactory().createEngine();
}
exports.Server = Server;
