"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const Kernel_1 = require("../src/Ioc/Kernel");
const Facade_1 = require("../src/Facade/Facade");
const _ = require("lodash");
const Loader_1 = require("../src/Facade/Loader");
ava_1.default.before('init Facade', t => {
    const kernel = new Kernel_1.Kernel();
    Facade_1.Facade.set(kernel);
});
ava_1.default('getKey', t => {
    t.is(Loader_1.Encryption().getKey(), 'saltsaltsalt');
});
ava_1.default('encrypt & decrypt', t => {
    const encrypt_value = Loader_1.Encryption().encrypt('abc');
    const decrypt_value = Loader_1.Encryption().decrypt(encrypt_value);
    t.true(_.isString(encrypt_value));
    t.is(decrypt_value, 'abc');
    t.not(encrypt_value, 'abc');
});
ava_1.default('make', t => {
    const value = Loader_1.Encryption().make('abc');
    t.true(_.isString(value));
    t.not(value, 'abc');
});
