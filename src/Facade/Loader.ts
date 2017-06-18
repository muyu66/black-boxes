import { TYPES } from '../Interface/Map';
import { IEncrypter } from '../Interface/IEncryption';

import { Facade } from './Facade';

function Encryption() {
    return <IEncrypter>Facade.getIoc().resolve(TYPES.IEncrypter);
}

export { Encryption };