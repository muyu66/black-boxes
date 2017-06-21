import { Container, interfaces } from 'inversify';
/**
 * 核心容器
 *
 * @export
 * @class Ioc
 */
export declare class Kernel {
    /**
     * IoC 容器
     *
     * @private
     * @type {Container}
     * @memberof Ioc
     */
    private container;
    /**
     * 需要延迟加载 的 服务提供者
     *
     * @private
     * @type {Provider[]}
     * @memberof Ioc
     */
    private delay_providers;
    constructor();
    /**
     * 注册 服务提供者
     *
     * @private
     * @param {Provider} register
     * @returns {void}
     *
     * @memberof Ioc
     */
    private bind(register);
    get(): Container;
    /**
     * 从 Ioc 容器 里解析出实例
     *
     * @template T
     * @param {interfaces.ServiceIdentifier<T>} type
     * @returns
     *
     * @memberof Ioc
     */
    resolve<T>(type: interfaces.ServiceIdentifier<T>): any;
}
