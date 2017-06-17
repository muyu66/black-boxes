import { Connection } from 'typeorm';

export interface IDatabaseManager {

    getConnection(): Promise<Connection>;

    isConnected: boolean;

}