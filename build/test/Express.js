"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
const Service_1 = require("../src/Ioc/Service");
const Facade_1 = require("../src/Facade/Facade");
const inversify_1 = require("inversify");
const inversify_express_utils_1 = require("inversify-express-utils");
const supertest = require("supertest");
const Loader_1 = require("../src/Facade/Loader");
ava_1.default.before('init Facade', t => {
    const kernel = new Kernel_1.Kernel();
    Facade_1.Facade.set(kernel);
});
let Service1 = class Service1 {
    hello() {
        return Loader_1.Pinyin().convert('德语');
    }
};
Service1 = __decorate([
    inversify_1.injectable()
], Service1);
let Controller1 = class Controller1 {
    constructor(service) {
        this.service = service;
    }
    getHello() {
        return this.service.hello();
    }
};
__decorate([
    inversify_express_utils_1.Get('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Controller1.prototype, "getHello", null);
Controller1 = __decorate([
    inversify_1.injectable(),
    inversify_express_utils_1.Controller('/'),
    __param(0, inversify_1.inject(Service1.name)),
    __metadata("design:paramtypes", [Service1])
], Controller1);
ava_1.default('set & get', (t) => __awaiter(this, void 0, void 0, function* () {
    const service = new Service_1.Service();
    service.bindController(Controller1);
    service.bindService(Service1);
    Loader_1.Server().set(service.get());
    const server = Loader_1.Server().get();
    const app = server.build();
    app.listen(3088);
    const request = supertest.agent(app);
    yield request.get('/')
        .expect(function (res) {
        t.is(res.text, 'deyu');
    });
}));
