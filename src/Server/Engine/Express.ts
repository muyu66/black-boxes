/**
 * IOC
 */
import { IServerEngine } from '../../Interface/IServer';
import { TYPES } from '../../Interface/Map';
import { inject, injectable } from 'inversify';
import 'reflect-metadata';

import { interfaces, Controller, InversifyExpressServer, TYPE } from 'inversify-express-utils';
import { Container } from 'inversify';

@injectable()
export class Express implements IServerEngine {

    private server: InversifyExpressServer;

    set(container: Container): void {
        this.server = new InversifyExpressServer(container);
    }

    get(): InversifyExpressServer {
        return this.server;
    }

}