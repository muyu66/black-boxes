import { InversifyExpressServer } from 'inversify-express-utils';
import { Container } from 'inversify';
export interface IServerEngine {
    get(): InversifyExpressServer;
    set(container: Container): void;
}
export interface FServer {
    createEngine(): IServerEngine;
}
