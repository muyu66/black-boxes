/**
 * 通用
 */
import { TYPES, FACTORYS } from '../Interface/Map';
import { Facade } from './Facade';

/**
 * 各种 Facade 的接口
 */
import { IEncrypter } from '../Interface/IEncryption';
import { IConfigManager } from '../Interface/IConfig';
import { IAmqpEngine, FAmqp } from '../Interface/IAmqp';
import { IAuthManager } from '../Interface/IAuth';
import { IDatabaseManager } from '../Interface/IDatabase';
import { IExcelManager } from '../Interface/IExcel';
import { IMailEngine, FMail } from '../Interface/IMail';
import { IPinyin } from '../Interface/IPinyin';
import { IServerEngine, FServer } from '../Interface/IServer';

/**
 * 各种 Facade 的实例
 */
import { PaginateManager } from '../Paginate/PaginateManager';
import { RedisManager } from '../Redis/RedisManager';
import { Validator } from '../Validation/Validator';
import { Function } from '../Support/Function';

function Encryption() {
    return <IEncrypter>Facade.getIoc().resolve(TYPES.IEncrypter);
}

function Config() {
    return <IConfigManager>Facade.getIoc().resolve(TYPES.IConfigManager);
}

function AmqpFactory() {
    return <FAmqp>Facade.getIoc().resolve(FACTORYS.FIAmqp);
}
function Amqp() {
    return AmqpFactory().createEngine();
}

function Auth() {
    return <IAuthManager>Facade.getIoc().resolve(TYPES.IAuthManager);
}

function Database() {
    return <IDatabaseManager>Facade.getIoc().resolve(TYPES.IDatabaseManager);
}

function Excel() {
    return <IExcelManager>Facade.getIoc().resolve(TYPES.IExcelManager);
}

function MailFactory() {
    return <FMail>Facade.getIoc().resolve(FACTORYS.FIMail);
}
function Mail() {
    return MailFactory().createEngine();
}

function Paginate() {
    return <PaginateManager>Facade.getIoc().resolve(PaginateManager);
}

function Redis() {
    return <RedisManager>Facade.getIoc().resolve(RedisManager);
}

function Validation() {
    return <Validator>Facade.getIoc().resolve(Validator);
}

function $() {
    return <Function>Facade.getIoc().resolve(Function);
}

function Pinyin() {
    return <IPinyin>Facade.getIoc().resolve(TYPES.IPinyin);
}

function ServerFactory() {
    return <FServer>Facade.getIoc().resolve(FACTORYS.FIServer);
}
function Server() {
    return ServerFactory().createEngine();
}

export {
    Encryption, Config, Amqp, Auth, Database, Excel, Mail, Paginate, Redis, Validation,
    $, Pinyin, Server
};