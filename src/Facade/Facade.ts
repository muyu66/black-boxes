import { Ioc } from '../Ioc/Ioc';

export class Facade {

    private static ioc: Ioc;

    static getIoc() {
        if (!Facade.ioc) {
            Facade.ioc = new Ioc();
        }

        return Facade.ioc;
    }

}