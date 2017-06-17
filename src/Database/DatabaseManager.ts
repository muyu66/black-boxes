import { createConnection, getConnection, Connection } from 'typeorm';
import * as Path from 'path';

/**
 * IOC
 */
import { IDatabaseManager } from '../Interface/IDatabase';
import { injectable } from 'inversify';
import 'reflect-metadata';

@injectable()
export class DatabaseManager implements IDatabaseManager {

    public isConnected: boolean = false;
    private db: Connection;

    private connect_name = 'mysql1';

    public async getConnection(): Promise<Connection> {
        if (!this.isConnected) {
            await this.connect();
        }

        return this.db;
    }

    private async connect(): Promise<void> {
        const option = {
            type: <'mysql'>'mysql',
            host: 'localhost',
            port: 3306,
            database: 'hrm_prod',
            username: 'root',
            password: '19931124',
        };
        const entitiey_path = Path.normalize(__dirname + '/Model/*.js');

        await createConnection({
            name: this.connect_name,
            driver: option,
            entities: [entitiey_path],
            autoSchemaSync: false,
        });

        this.db = getConnection(this.connect_name);
        this.isConnected = true;
    }

}