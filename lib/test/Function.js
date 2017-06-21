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
ava_1.default('getAbs', t => {
    t.is(Loader_1.$().getAbs(-110), 110);
});
ava_1.default('isFloat', t => {
    t.true(Loader_1.$().isFloat(1.232231863));
    t.false(Loader_1.$().isFloat(22));
    t.false(Loader_1.$().isFloat(0));
});
