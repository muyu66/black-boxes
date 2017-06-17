export interface IConfigManager {

    get(config: string);

    set(config: object): void;

}