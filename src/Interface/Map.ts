const TYPES = {
    IEncrypter: Symbol('IEncrypter'),
    IDatabaseManager: Symbol('IDatabaseManager'),
    IAuthManager: Symbol('IAuthManager'),
    IConfigManager: Symbol('IConfigManager'),
    IAmqpEngine: Symbol('IAmqpEngine'),
    IMailEngine: Symbol('IMailEngine'),
    IExcelManager: Symbol('IExcelManager'),
    IPinyin: Symbol('IPinyin'),
};

const FACTORYS = {
    FIAmqp: Symbol('FIAmqp'),
    FIMail: Symbol('FIMail'),
};

const RELATIONS = {
    FIAmqpEngine: 'Factory<IAmqpEngine>',
    FIMailEngine: 'Factory<IMailEngine>',
};

interface Provider {
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

export { TYPES, FACTORYS, RELATIONS, Provider };