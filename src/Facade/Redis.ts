import { Ioc } from '../Ioc/Ioc';
import { RedisManager } from '../Redis/RedisManager';

import { Facade } from './Facade';

const Redis = <RedisManager>Facade.getIoc().resolve(RedisManager);

export { Redis };