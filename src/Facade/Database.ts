import { Ioc } from '../Ioc/Ioc';
import { TYPES } from '../Interface/Map';
import { IDatabaseManager } from '../Interface/IDatabase';

import { Facade } from './Facade';

const Database = <IDatabaseManager>Facade.getIoc().resolve(TYPES.IDatabaseManager);

export { Database };