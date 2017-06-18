import { Container, interfaces } from 'inversify';
import { providers } from './Kernel';
import { Provider } from '../Interface/Map';

export class Ioc {

    private container: Container;

    constructor() {
        const container = new Container();

        for (const provider of providers) {
            const registers: Provider[] = provider.register();

            for (const register of registers) {
                if (register.to_self) {
                    container.bind(register.instance).toSelf();
                    continue;
                }
                if (register.factory_type) {
                    container.bind(register.factory_type).toFactory((context) => {
                        return (named: string) => () => {
                            let engine = context.container.getNamed(register.type, named);
                            return engine;
                        };
                    });
                    continue;
                }

                if (register.singleton && register.target_name) {
                    container.bind(register.type).to(register.instance).inSingletonScope().whenTargetNamed(register.target_name);
                } else if (register.singleton && !register.target_name) {
                    container.bind(register.type).to(register.instance).inSingletonScope();
                } else if (!register.singleton && register.target_name) {
                    container.bind(register.type).to(register.instance).whenTargetNamed(register.target_name);
                } else {
                    container.bind(register.type).to(register.instance);
                }
            }
        }

        this.container = container;
    }

    public get() {
        return this.container;
    }

    public resolve<T>(type: interfaces.ServiceIdentifier<T>) {
        const instance = this.container.get(type);

        return instance;
    }

}