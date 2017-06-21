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
ava_1.default('render error [require]', (t) => __awaiter(this, void 0, void 0, function* () {
    const params = {
        name: undefined,
    };
    const rules = {
        name: 'require',
    };
    yield t.throws(Loader_1.Validation().render(params, rules));
}));
ava_1.default('render error [len]', (t) => __awaiter(this, void 0, void 0, function* () {
    const params = {
        name: 'Boy',
    };
    const rules = {
        name: 'len:6:100',
    };
    yield t.throws(Loader_1.Validation().render(params, rules));
}));
ava_1.default('render successfully [len]', (t) => __awaiter(this, void 0, void 0, function* () {
    const params = {
        name: 'Boy',
    };
    const rules = {
        name: 'len:2:100',
    };
    yield t.notThrows(Loader_1.Validation().render(params, rules));
}));
