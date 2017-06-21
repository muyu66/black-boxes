export interface IEncrypter {
    encrypt(source: string): string;
    decrypt(source: string): string;
    getKey(): string;
    make(source: string): string;
}
