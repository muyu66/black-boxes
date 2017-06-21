import { IMailEngine, FMail } from '../Interface/IMail';
import { IConfigManager } from '../Interface/IConfig';
import 'reflect-metadata';
export declare class MailManager implements FMail {
    private engine;
    constructor(engine: (engine: string) => () => IMailEngine, config: IConfigManager);
    createEngine(): IMailEngine;
}
