"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const Kernel_1 = require("../src/Ioc/Kernel");
const Facade_1 = require("../src/Facade/Facade");
const Loader_1 = require("../src/Facade/Loader");
ava_1.default.before('init Facade', t => {
    const kernel = new Kernel_1.Kernel();
    Facade_1.Facade.set(kernel);
});
ava_1.default('get', t => {
    t.is(Loader_1.Config().get('server.key'), 'saltsaltsalt');
});
ava_1.default('set', t => {
    const config = {
        'server': {
            'key': 'saltsaltsalt',
            'test': 'testtesttest',
        }
    };
    Loader_1.Config().set(config);
    t.is(Loader_1.Config().get('server.test'), 'testtesttest');
});
