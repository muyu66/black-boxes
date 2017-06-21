"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
ava_1.default('createPassword', t => {
    const pwd = Loader_1.Auth().createPassword('zhouyu');
    t.not(pwd, 'qweasdzxc');
    t.true(_.isString(pwd));
});
ava_1.default('attempt', (t) => __awaiter(this, void 0, void 0, function* () {
    const auth = yield Loader_1.Auth().attempt({ account: 'zhouyu', password: 'zhouyu' });
    t.true(_.isObject(auth));
    t.is(auth['account'], 'zhouyu');
    t.not(auth['password'], 'zhouyu');
}));
