import { Kernel } from '../Ioc/Kernel';
export declare class Facade {
    private static kernel;
    static set(ioc: Kernel): void;
    static get(): Kernel;
}
