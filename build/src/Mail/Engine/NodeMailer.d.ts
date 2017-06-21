import * as Mailer from 'nodemailer';
import { IMailEngine } from '../../Interface/IMail';
/**
 * IOC
 */
import { IConfigManager } from '../../Interface/IConfig';
import 'reflect-metadata';
export declare class NodeMailer implements IMailEngine {
    private transporter;
    constructor(config: IConfigManager);
    test(): Promise<true>;
    send(mail: Mailer.SendMailOptions): Promise<true>;
}
