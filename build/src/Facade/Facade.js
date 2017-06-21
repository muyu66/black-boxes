"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Facade {
    static set(ioc) {
        Facade.kernel = ioc;
    }
    static get() {
        return Facade.kernel;
    }
}
exports.Facade = Facade;
