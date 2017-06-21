import { Encrypter } from './Encrypter';
export declare class EncryptionProvider {
    static register(): {
        type: symbol;
        instance: typeof Encrypter;
    }[];
}
