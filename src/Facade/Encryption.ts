import { Ioc } from '../Ioc/Ioc';
import { TYPES } from '../Interface/Map';
import { IEncrypter } from '../Interface/IEncryption';

import { Facade } from './Facade';

const Encryption = <IEncrypter>Facade.getIoc().resolve(TYPES.IEncrypter);

export { Encryption };