export interface IFileManager {

    dir(path: string): this;

    list(): Promise<string[]>;

}