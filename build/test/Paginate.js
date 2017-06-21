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
ava_1.default('render', t => {
    const models = [
        { id: 1, name: 'Guzz', },
        { id: 2, name: 'Tuduo', },
        { id: 3, name: 'Bakli', },
    ];
    const result = Loader_1.Paginate().render(models, 30, 1);
    t.is(result.currentPage, 1);
    t.is(result.firstPage, 1);
    t.is(result.lastPage, 10);
    t.is(result.nextPageUrl, 'http://localhost:3000?page=2');
    t.is(result.perPage, models.length);
    t.is(result.prevPageUrl, null);
    t.is(result.from, 1);
    t.is(result.to, 3);
    t.is(result.total, 30);
    t.deepEqual(result.data, models);
});
ava_1.default('custom', t => {
    const models = [
        { id: 1, name: 'Guzz', },
        { id: 2, name: 'Tuduo', },
        { id: 3, name: 'Bakli', },
    ];
    const result = Loader_1.Paginate().custom(models, 2, 1);
    t.is(result.currentPage, 1);
    t.is(result.firstPage, 1);
    t.is(result.lastPage, 2);
    t.is(result.nextPageUrl, 'http://localhost:3000?page=2');
    t.is(result.perPage, 2);
    t.is(result.prevPageUrl, null);
    t.is(result.from, 1);
    t.is(result.to, 2);
    t.is(result.total, models.length);
    t.deepEqual(result.data, [
        { id: 1, name: 'Guzz', },
        { id: 2, name: 'Tuduo', },
    ]);
});
