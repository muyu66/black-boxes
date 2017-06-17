import { Ioc } from '../Ioc/Ioc';
import { TYPES } from '../Interface/Map';
import { IConfigManager } from '../Interface/IConfig';

import { Facade } from './Facade';

const Config = <IConfigManager>Facade.getIoc().resolve(TYPES.IConfigManager);

export { Config };

