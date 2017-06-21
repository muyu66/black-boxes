import { Kernel } from '../Ioc/Kernel';

export class Facade {

    private static kernel: Kernel;

    static set(ioc: Kernel): void {
        Facade.kernel = ioc;
    }

    static get(): Kernel {
        return Facade.kernel;
    }

}