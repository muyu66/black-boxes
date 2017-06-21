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
const Loader_1 = require("../src/Facade/Loader");
ava_1.default.before('init Facade', t => {
    const kernel = new Kernel_1.Kernel();
    Facade_1.Facade.set(kernel);
});
/**
 * FIXME: test.skip() 可能存在问题
 */
ava_1.default('send - 不将运行', (t) => __awaiter(this, void 0, void 0, function* () {
    // const result = await Mail().send({
    //     from: 'muyu.zhouyu@gmail.com',
    //     to: 'zhouyu_66@163.com',
    //     subject: 'Hello guys !',
    //     text: 'Hello, this is my email.',
    // });
    // t.true(result);
    t.pass();
}));
ava_1.default('test', (t) => __awaiter(this, void 0, void 0, function* () {
    const result = yield Loader_1.Mail().test();
    t.true(result);
}));
