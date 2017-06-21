"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const inversify_express_utils_1 = require("inversify-express-utils");
/**
 * 服务容器
 *
 * @export
 * @class Ioc
 */
class Service {
    constructor() {
        let container = new inversify_1.Container();
        this.container = container;
    }
    /**
     * 影子方法: 用来快速创建绑定
     *
     * @param {{ controllers: { new (...args: any[]) }[], services: { new (...args: any[]) }[] }} lists
     * @memberof Service
     */
    bind(controllers, services) {
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
    bindController(controller) {
        this.container.bind(inversify_express_utils_1.TYPE.Controller).to(controller).whenTargetNamed(controller.name);
    }
    /**
     * 注册 服务
     *
     * @template T
     * @param {{ new (...args: any[]): T }} service
     * @memberof Service
     */
    bindService(service) {
        this.container.bind(service.name).to(service);
    }
    get() {
        return this.container;
    }
}
exports.Service = Service;
