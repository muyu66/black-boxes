import { createConnection, getConnection, Connection, DriverOptions } from 'typeorm';
import * as Path from 'path';
import * as _ from 'lodash';

/**
 * IOC
 */
import { IDatabaseManager } from '../Interface/IDatabase';
import { injectable, inject } from 'inversify';
import 'reflect-metadata';
import { IConfigManager } from '../Interface/IConfig';
import { TYPES } from '../Interface/Map';

@injectable()
export class DatabaseManager implements IDatabaseManager {

    /**
     * 是否已经连接
     *
     * @type {boolean}@memberof DatabaseManager
     */
    public isConnected: boolean = false;

    /**
     * 数据库连接池
     *
     * @private
     * @type {Connection}@memberof DatabaseManager
     */
    private db: Connection;

    /**
     * 数据库池 连接名
     *
     * @private
     * @memberof DatabaseManager
     */
    private connect_name = 'mysql1';

    /**
     * 数据库配置
     *
     * @private
     * @type {DriverOptions}@memberof DatabaseManager
     */
    private option: DriverOptions;

    constructor( @inject(TYPES.IConfigManager) config: IConfigManager) {
        // 取出 数据库配置对象
        const database = config.get('database');
        // 格式化配置
        const option = {
            type: database['using'],
        };
        _.assign(option, database[database['using']]);
        this.option = option;
    }

    public async getConnection(): Promise<Connection> {
        if (!this.isConnected) {
            await this.connect();
        }

        return this.db;
    }

    private async connect(): Promise<void> {
        const entitiey_path = Path.normalize(__dirname + '/Model/*.js');

        await createConnection({
            name: this.connect_name,
            driver: this.option,
            entities: [entitiey_path],
            autoSchemaSync: false,
        });

        this.db = getConnection(this.connect_name);
        this.isConnected = true;
    }

}