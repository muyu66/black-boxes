import { Container } from 'inversify';
/**
 * 服务容器
 *
 * @export
 * @class Ioc
 */
export declare class Service {
    /**
     * IoC 容器
     *
     * @private
     * @type {Container}
     * @memberof Ioc
     */
    private container;
    constructor();
    /**
     * 影子方法: 用来快速创建绑定
     *
     * @param {{ controllers: { new (...args: any[]) }[], services: { new (...args: any[]) }[] }} lists
     * @memberof Service
     */
    bind(controllers: any[], services: any[]): void;
    /**
     * 注册 控制器
     *
     * @template T
     * @param {{new (...args: any[]): T}} controller
     * @memberof Service
     */
    bindController<T>(controller: {
        new (...args: any[]): T;
    }): void;
    /**
     * 注册 服务
     *
     * @template T
     * @param {{ new (...args: any[]): T }} service
     * @memberof Service
     */
    bindService<T>(service: {
        new (...args: any[]): T;
    }): void;
    get(): Container;
}
