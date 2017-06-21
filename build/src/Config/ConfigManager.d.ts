/**
 * IOC
 */
import { IConfigManager } from '../Interface/IConfig';
import 'reflect-metadata';
export declare class ConfigManager implements IConfigManager {
    private config;
    constructor();
    set(config: object): void;
    get(config: string): {};
}
