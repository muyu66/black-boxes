/**
 * IOC
 */
import { IAmqpEngine } from '../../Interface/IAmqp';
import { injectable, inject } from 'inversify';
import 'reflect-metadata';
import { IConfigManager } from '../../Interface/IConfig';
import { TYPES } from '../../Interface/Map';

import * as amqp from 'rabbit.js';

@injectable()
export class RabbitJs implements IAmqpEngine {

    @inject(TYPES.IConfigManager)
    private config: IConfigManager;

    private ct: amqp.Context;
    private channel_name: string;

    constructor() {
        const address = this.config.get('amqp.rabbit_js');

        this.ct = amqp.createContext(address);
    }

    public setChannel(channel_name: string): void {
        this.channel_name = channel_name;
    }

    public push(data: object): void {
        const send: any = this.ct.socket('PUSH', { routing: 'direct', prefetch: 1 });
        send.connect(this.channel_name);
        send.write(JSON.stringify(data), 'utf8');
    }

}