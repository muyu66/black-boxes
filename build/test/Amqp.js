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
ava_1.default('getChannel & setChannel', t => {
    Loader_1.Amqp().setChannel('HANDLE');
    t.is(Loader_1.Amqp().getChannel(), 'HANDLE');
});
ava_1.default('push', t => {
    Loader_1.Amqp().setChannel('HANDLE');
    Loader_1.Amqp().push({ test: 'test' });
    t.pass();
});
