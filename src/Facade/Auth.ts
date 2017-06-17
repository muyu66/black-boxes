import { Ioc } from '../Ioc/Ioc';
import { TYPES } from '../Interface/Map';
import { IAuthManager } from '../Interface/IAuth';

import { Facade } from './Facade';

const Auth = <IAuthManager>Facade.getIoc().resolve(TYPES.IAuthManager);

export { Auth };