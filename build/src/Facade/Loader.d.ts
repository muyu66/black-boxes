/**
 * 各种 Facade 的接口
 */
import { IEncrypter } from '../Interface/IEncryption';
import { IConfigManager } from '../Interface/IConfig';
import { IAmqpEngine } from '../Interface/IAmqp';
import { IAuthManager } from '../Interface/IAuth';
import { IDatabaseManager } from '../Interface/IDatabase';
import { IExcelManager } from '../Interface/IExcel';
import { IMailEngine } from '../Interface/IMail';
import { IPinyin } from '../Interface/IPinyin';
import { IServerEngine } from '../Interface/IServer';
/**
 * 各种 Facade 的实例
 */
import { PaginateManager } from '../Paginate/PaginateManager';
import { RedisManager } from '../Redis/RedisManager';
import { Validator } from '../Validation/Validator';
import { Function } from '../Support/Function';
declare function Encryption(): IEncrypter;
declare function Config(): IConfigManager;
declare function Amqp(): IAmqpEngine;
declare function Auth(): IAuthManager;
declare function Database(): IDatabaseManager;
declare function Excel(): IExcelManager;
declare function Mail(): IMailEngine;
declare function Paginate(): PaginateManager;
declare function Redis(): RedisManager;
declare function Validation(): Validator;
declare function $(): Function;
declare function Pinyin(): IPinyin;
declare function Server(): IServerEngine;
export { Encryption, Config, Amqp, Auth, Database, Excel, Mail, Paginate, Redis, Validation, $, Pinyin, Server };
