import { inject, injectable, named } from 'inversify';
import { IFactory } from '../Interface/IFactory';

import { IAmqpEngine, FAmqp } from '../Interface/IAmqp';
import { IConfigManager } from '../Interface/IConfig';

import 'reflect-metadata';
import { TYPES, FACTORYS, RELATIONS } from '../Interface/Map';

@injectable()
export class AmqpManager implements FAmqp {

    private engine: () => IAmqpEngine;

    constructor( @inject(RELATIONS.FIAmqpEngine) engine: (engine: string) => () => IAmqpEngine,
        @inject(TYPES.IConfigManager) config: IConfigManager
    ) {
        const engine_name = config.get('amqp.using');
        this.engine = engine(engine_name);
    }

    public createEngine(): IAmqpEngine {
        return this.engine();
    }

}