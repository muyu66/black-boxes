export interface IConfigManager {
    get(config: string): any;
    set(config: object): void;
}
