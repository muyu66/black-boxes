import { Ioc } from '../Ioc/Ioc';
import { TYPES } from '../Interface/Map';
import { IMailEngine } from '../Interface/IMail';

import { Facade } from './Facade';

const Mail = <IMailEngine>Facade.getIoc().resolve(TYPES.IMailEngine);

export { Mail };