import { TYPES } from '../Interface/Map';
import { Encrypter } from './Encrypter';

export class EncryptionProvider {

    static register() {
        return [
            {
                type: TYPES.IEncrypter,
                instance: Encrypter,
            }
        ];
    }

}