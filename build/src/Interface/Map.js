"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TYPES = {
    IEncrypter: Symbol('IEncrypter'),
    IDatabaseManager: Symbol('IDatabaseManager'),
    IAuthManager: Symbol('IAuthManager'),
    IConfigManager: Symbol('IConfigManager'),
    IAmqpEngine: Symbol('IAmqpEngine'),
    IServerEngine: Symbol('IServerEngine'),
    IMailEngine: Symbol('IMailEngine'),
    IExcelManager: Symbol('IExcelManager'),
    IPinyin: Symbol('IPinyin'),
};
exports.TYPES = TYPES;
const FACTORYS = {
    FIAmqp: Symbol('FIAmqp'),
    FIMail: Symbol('FIMail'),
    FIServer: Symbol('FIServer'),
};
exports.FACTORYS = FACTORYS;
const RELATIONS = {
    FIAmqpEngine: 'Factory<IAmqpEngine>',
    FIMailEngine: 'Factory<IMailEngine>',
    FIServerEngine: 'Factory<FIServerEngine>',
};
exports.RELATIONS = RELATIONS;
