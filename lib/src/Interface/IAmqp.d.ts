export interface IAmqpEngine {
    push(data: object): void;
    setChannel(channel_name: string): void;
    getChannel(): string;
}
export interface FAmqp {
    createEngine(): IAmqpEngine;
}
