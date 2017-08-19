/**
 * IOC
 */
import { IFileManager } from '../interface/IFile';
import { injectable } from 'inversify';
import 'reflect-metadata';

import * as fs from 'fs';
import * as _ from 'lodash';

@injectable()
export class FileManager implements IFileManager {

    private path: string;

    public dir(path: string): this {
        this.path = path;
        return this;
    }

    public async list(): Promise<string[]> {
        return await fs.readdirSync(this.path);
    }

}