import { inject, injectable, named } from 'inversify';
import { IFactory } from '../Interface/IFactory';

import { IMailEngine, SendMailOptions, FMail } from '../Interface/IMail';
import { IConfigManager } from '../Interface/IConfig';

import 'reflect-metadata';
import { TYPES, FACTORYS, RELATIONS } from '../Interface/Map';

@injectable()
export class MailManager implements FMail {

    private engine: () => IMailEngine;

    constructor( @inject(RELATIONS.FIMailEngine) engine: (engine: string) => () => IMailEngine,
        @inject(TYPES.IConfigManager) config: IConfigManager) {
        const engine_name = config.get('mail.using');

        this.engine = engine(engine_name);
    }

    createEngine(): IMailEngine {
        return this.engine();
    }
}