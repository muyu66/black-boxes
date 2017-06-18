/**
 * 通用
 */
import { TYPES, FACTORYS } from '../Interface/Map';
import { Facade } from './Facade';

/**
 * 各种 Facade
 */
import { IEncrypter } from '../Interface/IEncryption';
import { IConfigManager } from '../Interface/IConfig';
import { IAmqpEngine, FAmqp } from '../Interface/IAmqp';
import { IAuthManager } from '../Interface/IAuth';
import { IDatabaseManager } from '../Interface/IDatabase';
import { IExcelManager } from '../Interface/IExcel';

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

export { Encryption, Config, Amqp, Auth, Database, Excel };