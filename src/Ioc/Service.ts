import { Container } from 'inversify';
import { TYPE } from 'inversify-express-utils';

/**
 * 服务容器
 *
 * @export
 * @class Ioc
 */
export class Service {

    /**
     * IoC 容器
     *
     * @private
     * @type {Container}
     * @memberof Ioc
     */
    private container: Container;

    constructor() {
        let container = new Container();
        this.container = container;
    }

    /**
     * 影子方法: 用来快速创建绑定
     *
     * @param {{ controllers: { new (...args: any[]) }[], services: { new (...args: any[]) }[] }} lists
     * @memberof Service
     */
    public bind(controllers: any[], services: any[]): void {
        for (const list of controllers) {
            this.bindController(list);
        }
        for (const list of services) {
            this.bindService(list);
        }
    }

    /**
     * 注册 控制器
     *
     * @template T
     * @param {{new (...args: any[]): T}} controller
     * @memberof Service
     */
    public bindController<T>(controller: { new (...args: any[]): T }): void {
        this.container.bind(TYPE.Controller).to(controller).whenTargetNamed(controller.name);
    }

    /**
     * 注册 服务
     *
     * @template T
     * @param {{ new (...args: any[]): T }} service
     * @memberof Service
     */
    public bindService<T>(service: { new (...args: any[]): T }): void {
        this.container.bind(service.name).to(service);
    }

    public get(): Container {
        return this.container;
    }

}