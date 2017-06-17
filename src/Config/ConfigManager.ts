/**
 * IOC
 */
import { IConfigManager } from '../Interface/IConfig';
import { injectable } from 'inversify';
import 'reflect-metadata';

import * as fs from 'fs';
import * as _ from 'lodash';

@injectable()
export class ConfigManager implements IConfigManager {

    private config: object;

    constructor() {
        if (!this.config) {
            const path = process.env.NODE_ENV === 'test' ? '.env.test.json' : '.env.json';
            this.config = JSON.parse(fs.readFileSync(path, 'utf8'));
        }
    }

    public set(config: object): void {
        this.config = config;
    }

    public get(config: string) {
        const obj = this.config;

        return _.get(obj, config);
    }

}