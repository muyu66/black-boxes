import { Ioc } from '../Ioc/Ioc';

export class Facade {

    private static ioc: Ioc;

    static setIoc(ioc: Ioc): void {
        Facade.ioc = ioc;
    }

    static getIoc(): Ioc {
        return Facade.ioc;
    }

}