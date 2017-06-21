import { Connection } from 'typeorm';
/**
 * IOC
 */
import { IDatabaseManager } from '../Interface/IDatabase';
import 'reflect-metadata';
import { IConfigManager } from '../Interface/IConfig';
export declare class DatabaseManager implements IDatabaseManager {
    /**
     * 是否已经连接
     *
     * @type {boolean}@memberof DatabaseManager
     */
    isConnected: boolean;
    /**
     * 数据库连接池
     *
     * @private
     * @type {Connection}@memberof DatabaseManager
     */
    private db;
    /**
     * 数据库池 连接名
     *
     * @private
     * @memberof DatabaseManager
     */
    private connect_name;
    /**
     * 数据库配置
     *
     * @private
     * @type {DriverOptions}@memberof DatabaseManager
     */
    private option;
    constructor(config: IConfigManager);
    getConnection(): Promise<Connection>;
    private connect();
}
