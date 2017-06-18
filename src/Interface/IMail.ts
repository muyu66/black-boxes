export interface IMailEngine {
    test(): Promise<true>;

    send(mail: SendMailOptions): Promise<true>;
}

export interface FMail {
    createEngine(): IMailEngine;
}

export interface SendMailOptions {
    from: string;
    to: string | string[];
    cc?: string | string[];
    subject?: string;
    text?: string | Buffer | NodeJS.ReadableStream;
}