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
ava_1.default('convert', t => {
    const pinyin_str = Loader_1.Pinyin().convert('中文', undefined, true);
    const pinyin_array = Loader_1.Pinyin().convert('中文', undefined, false);
    t.is(pinyin_str, 'zhongwen');
    t.deepEqual(pinyin_array, ['zhong', 'wen']);
});
