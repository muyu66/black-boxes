"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const Loader_1 = require("./Loader");
const _ = require("lodash");
/**
 * 核心容器
 *
 * @export
 * @class Ioc
 */
class Kernel {
    constructor() {
        /**
         * 需要延迟加载 的 服务提供者
         *
         * @private
         * @type {Provider[]}
         * @memberof Ioc
         */
        this.delay_providers = [];
        let container = new inversify_1.Container();
        this.container = container;
        for (const provider of Loader_1.providers) {
            const registers = provider.register();
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
    bind(register) {
        if (register.delay) {
            this.delay_providers.push(register);
            return;
        }
        if (register.to_self) {
            this.container.bind(register.instance).toSelf();
            return;
        }
        if (register.factory_type) {
            this.container.bind(register.factory_type).toFactory((context) => {
                return (named) => () => {
                    let engine = context.container.getNamed(register.type, named);
                    return engine;
                };
            });
            return;
        }
        if (register.singleton && register.target_name) {
            this.container.bind(register.type).to(register.instance).inSingletonScope().whenTargetNamed(register.target_name);
        }
        else if (register.singleton && !register.target_name) {
            this.container.bind(register.type).to(register.instance).inSingletonScope();
        }
        else if (!register.singleton && register.target_name) {
            this.container.bind(register.type).to(register.instance).whenTargetNamed(register.target_name);
        }
        else {
            this.container.bind(register.type).to(register.instance);
        }
    }
    get() {
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
    resolve(type) {
        let instance;
        /**
         * 判断是否是 延迟提供者
         */
        const delay_provider = _.find(this.delay_providers, { type: type });
        if (delay_provider) {
            /**
             * 先绑定, 再解析
             */
            delay_provider.delay = false;
            this.bind(delay_provider);
            _.remove(this.delay_providers, delay_provider);
            instance = this.container.get(delay_provider.type);
        }
        else {
            /**
             * 普通解析
             */
            instance = this.container.get(type);
        }
        return instance;
    }
}
exports.Kernel = Kernel;
