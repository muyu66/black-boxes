/**
 * IOC
 */
import { IServerEngine } from '../../Interface/IServer';
import 'reflect-metadata';
import { InversifyExpressServer } from 'inversify-express-utils';
import { Container } from 'inversify';
export declare class Express implements IServerEngine {
    private server;
    set(container: Container): void;
    get(): InversifyExpressServer;
}
