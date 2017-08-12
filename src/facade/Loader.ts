/**
 * 通用
 */
import { TYPES, FACTORYS } from '../interface/Map';
import { Facade } from './Facade';

/**
 * 各种 Facade 的接口
 */
import { IServerEngine, FServer } from '../interface/IServer';
import { IConfigManager } from '../interface/IConfig';

/**
 * 各种 Facade 的实例
 */
function Config() {
    return <IConfigManager>Facade.get().resolve(TYPES.IConfigManager);
}

function ServerFactory() {
    return <FServer>Facade.get().resolve(FACTORYS.FIServer);
}
function Server() {
    return ServerFactory().createEngine();
}

export {
    Server, Config
};