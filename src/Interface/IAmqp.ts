export interface IAmqpEngine {

    push(data: object): void;

    setChannel(channel_name: string): void;

}