import { Container, interfaces } from 'inversify';
import { Widget } from '../Interface/Map';
import * as _ from 'lodash';

/**
 * 核心容器
 *
 * @export
 * @class Ioc
 */
export class Kernel {

    /**
     * IoC 容器
     *
     * @private
     * @type {Container}
     * @memberof Ioc
     */
    private container: Container;

    /**
     * 需要延迟加载 的 服务挂件
     *
     * @private
     * @type {Provider[]}
     * @memberof Ioc
     */
    private delay_widgets: Widget[] = [];

    constructor() {
        let container = new Container();
        this.container = container;
    }

    /**
     * 加载挂件
     *
     * @memberof Kernel
     */
    public loadWidget(Widgets: any[]) {
        for (const widget of Widgets) {
            const registers: Widget[] = widget.register();
            for (const register of registers) {
                this.bind(register);
            }
        }
    }

    /**
     * 注册 服务提供者
     *
     * @private
     * @param {Provider} register
     * @returns {void}
     *
     * @memberof Ioc
     */
    private bind(register: Widget): void {
        if (register.delay) {
            this.delay_widgets.push(register);
            return;
        }

        if (register.to_self) {
            this.container.bind(register.instance).toSelf();
            return;
        }

        if (register.factory_type) {
            this.container.bind(register.factory_type).toFactory((context) => {
                return (named: string) => () => {
                    let engine = context.container.getNamed(register.type, named);
                    return engine;
                };
            });
            return;
        }

        if (register.singleton && register.target_name) {
            this.container.bind(register.type).to(register.instance).inSingletonScope().whenTargetNamed(register.target_name);
        } else if (register.singleton && !register.target_name) {
            this.container.bind(register.type).to(register.instance).inSingletonScope();
        } else if (!register.singleton && register.target_name) {
            this.container.bind(register.type).to(register.instance).whenTargetNamed(register.target_name);
        } else {
            this.container.bind(register.type).to(register.instance);
        }
    }

    public get() {
        return this.container;
    }

    /**
     * 从 Ioc 容器 里解析出实例
     *
     * @template T
     * @param {interfaces.ServiceIdentifier<T>} type
     * @returns
     *
     * @memberof Ioc
     */
    public resolve<T>(type: interfaces.ServiceIdentifier<T>) {
        let instance;

        /**
         * 判断是否是 延迟提供者
         */
        const delay_provider = _.find(this.delay_widgets, { type: <string | symbol>type });
        if (delay_provider) {
            /**
             * 先绑定, 再解析
             */
            delay_provider.delay = false;
            this.bind(delay_provider);
            _.remove(this.delay_widgets, delay_provider);
            instance = this.container.get(delay_provider.type);
        } else {
            /**
             * 普通解析
             */
            instance = this.container.get(type);
        }

        return instance;
    }

}