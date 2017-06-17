import { inject, injectable, named } from 'inversify';
import { IFactory } from '../Interface/IFactory';

import { IAmqpEngine } from '../Interface/IAmqp';
import { IConfigManager } from '../Interface/IConfig';

import 'reflect-metadata';
import { TYPES, FACTORYS } from '../Interface/Map';

@injectable()
export class AmqpManager implements IAmqpEngine {

    @inject(TYPES.IConfigManager)
    private config: IConfigManager;

    private engine: () => IAmqpEngine;

    constructor( @inject(FACTORYS.FIAmqpEngine) engine: (engine: string) => () => IAmqpEngine) {
        const engine_name = this.config.get('amqp.using');

        this.engine = engine(engine_name);
    }

    public setChannel(channel_name: string) {
        this.engine().setChannel(channel_name);
    }

    push(data: object): void {
        this.engine().push(data);
    }

}