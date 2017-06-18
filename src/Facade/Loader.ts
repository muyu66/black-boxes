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

export { Encryption, Config, Amqp };