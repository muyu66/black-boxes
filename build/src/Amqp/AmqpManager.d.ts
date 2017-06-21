import { IAmqpEngine, FAmqp } from '../Interface/IAmqp';
import { IConfigManager } from '../Interface/IConfig';
import 'reflect-metadata';
export declare class AmqpManager implements FAmqp {
    private engine;
    constructor(engine: (engine: string) => () => IAmqpEngine, config: IConfigManager);
    createEngine(): IAmqpEngine;
}
