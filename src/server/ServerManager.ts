import { inject, injectable, named } from 'inversify';
import { FServer, IServerEngine } from '../interface/IServer';
import { IConfigManager } from '../interface/IConfig';
import 'reflect-metadata';
import { TYPES, FACTORYS, RELATIONS } from '../interface/Map';

@injectable()
export class ServerManager implements FServer {

    private engine: () => IServerEngine;

    constructor( @inject(RELATIONS.FIServerEngine) engine: (engine: string) => () => IServerEngine,
        @inject(TYPES.IConfigManager) config: IConfigManager) {
        const engine_name = config.get('server.using');

        this.engine = engine(engine_name);
    }

    createEngine(): IServerEngine {
        return this.engine();
    }

}