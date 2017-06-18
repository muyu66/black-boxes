import * as Mailer from 'nodemailer';

interface AuthOptions {
    /** is the username */
    user?: string;

    /** is the password for the user if normal login is used */
    pass?: string;

    /** indicates the authetication type, defaults to ‘login’, other option is ‘oauth2’ */
    type?: any;

    /** is the registered client id of the application */
    clientId?: string;

    /** is the registered client secret of the application */
    clientSecret?: string;

    /** is an optional refresh token. If it is provided then Nodemailer tries to generate a new access token if existing one expires or fails */
    refreshToken?: string;

    /** is the access token for the user. Required only if refreshToken is not available and there is no token refresh callback specified */
    accessToken?: string;

    /** is an optional expiration time for the current accessToken */
    expires?: number;

    /** is an optional HTTP endpoint for requesting new access tokens. This value defaults to Gmail */
    accessUrl?: string;

    /** service client id, you can find it from the “client_id” field in the service key file */
    serviceClient?: string;

    /** is the private key contents, you can find it from the “private_key” field in the service key file */
    privateKey?: string;
}

import { IMailEngine } from '../../Interface/IMail';

/**
 * IOC
 */
import { IConfigManager } from '../../Interface/IConfig';
import { TYPES } from '../../Interface/Map';
import { inject, injectable } from 'inversify';
import 'reflect-metadata';

@injectable()
export class NodeMailer implements IMailEngine {

    private transporter: Mailer.Transporter;

    constructor( @inject(TYPES.IConfigManager) config: IConfigManager) {
        const account = <AuthOptions>config.get('mail.node_mailer');

        const transporter = Mailer.createTransport({
            service: 'gmail',
            auth: account,
        });

        this.transporter = transporter;
    }

    async test(): Promise<true> {
        await this.transporter.verify();

        return true;
    }

    async send(mail: Mailer.SendMailOptions): Promise<true> {
        await this.transporter.sendMail(mail);

        return true;
    }

}