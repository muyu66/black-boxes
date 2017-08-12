import { Kernel } from '../ioc/Kernel';

export class Facade {

    private static kernel: Kernel;

    static set(ioc: Kernel): void {
        Facade.kernel = ioc;
    }

    static get(): Kernel {
        return Facade.kernel;
    }

}