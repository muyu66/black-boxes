import { TYPES } from '../Interface/Map';
import { Encrypter } from './Encrypter';

export class EncryptionWidget {

    static register() {
        return [
            {
                type: TYPES.IEncrypter,
                instance: Encrypter,
            }
        ];
    }

}