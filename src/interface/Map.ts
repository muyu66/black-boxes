const TYPES = {
    IServerEngine: Symbol('IServerEngine'),
    IConfigManager: Symbol('IConfigManager'),
    IFileManager: Symbol('IFileManager'),
};

const FACTORYS = {
    FIServer: Symbol('FIServer'),
};

const RELATIONS = {
    FIServerEngine: 'Factory<FIServerEngine>',
};

interface Widget {
    /**
     * 绑定接口至实现
     *
     * @type {(symbol | string)}
     * @memberof Provider
     */
    type?: symbol | string;
    instance?: { new (...args: any[]) };
    /**
     * 单例
     *
     * @type {boolean} 默认 false
     * @memberof Provider
     */
    singleton?: boolean;
    /**
     * 工厂模式的绑定接口至实现
     *
     * @type {string}
     * @memberof Provider
     */
    factory_type?: string;
    target_name?: string;
    /**
     * 注入自己的实例
     *
     * @type {boolean}
     * @memberof Provider
     */
    to_self?: boolean;
    /**
     * 延迟绑定
     * 创建加载容器的时候, 不会触发绑定
     * 只有当真正解析的时候, 才会触发绑定
     *
     * @type {boolean}
     * @memberof Provider
     */
    delay?: boolean;
}

export { TYPES, FACTORYS, RELATIONS, Widget };