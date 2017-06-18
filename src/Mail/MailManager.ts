import { inject, injectable, named } from 'inversify';
import { IFactory } from '../Interface/IFactory';

import { IMailEngine, SendMailOptions } from '../Interface/IMail';
import { IConfigManager } from '../Interface/IConfig';

import 'reflect-metadata';
import { TYPES, FACTORYS, RELATIONS } from '../Interface/Map';

@injectable()
export class MailManager implements IMailEngine {

    @inject(TYPES.IConfigManager)
    private config: IConfigManager;

    private engine: () => IMailEngine;

    constructor( @inject(RELATIONS.FIMailEngine) engine: (engine: string) => () => IMailEngine) {
        const engine_name = this.config.get('mail.using');

        this.engine = engine(engine_name);
    }

    async send(mail: SendMailOptions): Promise<true> {
        return await this.engine().send(mail);
    }
}