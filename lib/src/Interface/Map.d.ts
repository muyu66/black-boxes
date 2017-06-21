declare const TYPES: {
    IEncrypter: symbol;
    IDatabaseManager: symbol;
    IAuthManager: symbol;
    IConfigManager: symbol;
    IAmqpEngine: symbol;
    IServerEngine: symbol;
    IMailEngine: symbol;
    IExcelManager: symbol;
    IPinyin: symbol;
};
declare const FACTORYS: {
    FIAmqp: symbol;
    FIMail: symbol;
    FIServer: symbol;
};
declare const RELATIONS: {
    FIAmqpEngine: string;
    FIMailEngine: string;
    FIServerEngine: string;
};
interface Provider {
    /**
     * 绑定接口至实现
     *
     * @type {(symbol | string)}
     * @memberof Provider
     */
    type?: symbol | string;
    instance?: {
        new (...args: any[]);
    };
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
