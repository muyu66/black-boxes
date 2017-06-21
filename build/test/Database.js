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
ava_1.default('isConnected', t => {
    t.is(Loader_1.Database().isConnected, false);
});
ava_1.default('getConnection', (t) => __awaiter(this, void 0, void 0, function* () {
    const db = yield Loader_1.Database().getConnection();
    const account = yield db.getRepository('Account').findOneById(1);
    t.is(account['id'], 1);
}));
