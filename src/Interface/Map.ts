const TYPES = {
    IEncrypter: Symbol('IEncrypter'),
    IDatabaseManager: Symbol('IDatabaseManager'),
    IAuthManager: Symbol('IAuthManager'),
    IConfigManager: Symbol('IConfigManager'),
    IAmqpEngine: Symbol('IAmqpEngine'),
    IMailEngine: Symbol('IMailEngine'),
    IExcelManager: Symbol('IExcelManager'),
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
    type?: symbol | string;
    instance?: { new (...args: any[]) };
    singleton?: boolean;
    factory_type?: string;
    target_name?: string;
    to_self?: boolean;
}

export { TYPES, FACTORYS, RELATIONS, Provider };