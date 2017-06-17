export interface IMailEngine {
    send(mail: SendMailOptions): Promise<true>;
}

export interface SendMailOptions {
    from: string;
    to: string | string[];
    cc?: string | string[];
    subject?: string;
    text?: string | Buffer | NodeJS.ReadableStream;
}