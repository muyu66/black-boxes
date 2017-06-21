/**
 * IOC
 */
import { IAmqpEngine } from '../../Interface/IAmqp';
import 'reflect-metadata';
import { IConfigManager } from '../../Interface/IConfig';
export declare class RabbitJs implements IAmqpEngine {
    private ct;
    private channel_name;
    constructor(config: IConfigManager);
    setChannel(channel_name: string): void;
    getChannel(): string;
    push(data: object): void;
}
