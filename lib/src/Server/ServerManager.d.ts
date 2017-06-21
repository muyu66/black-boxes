import { FServer, IServerEngine } from '../Interface/IServer';
import { IConfigManager } from '../Interface/IConfig';
import 'reflect-metadata';
export declare class ServerManager implements FServer {
    private engine;
    constructor(engine: (engine: string) => () => IServerEngine, config: IConfigManager);
    createEngine(): IServerEngine;
}
