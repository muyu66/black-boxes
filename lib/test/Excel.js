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
ava_1.default.before('init Excel', t => {
    Loader_1.Excel().input([
        {
            name: 'Sheet 1',
            data: [['A', 'B', '中文'], ['A1', 'B1', 'C1'], ['A2', 'B2', 'C2'], ['A3', 'B3', 'C3']],
        }
    ]);
});
ava_1.default('get', t => {
    const sheets = Loader_1.Excel().get();
    t.true(_.isArray(sheets));
    t.is(sheets[0].name, 'Sheet 1');
    t.deepEqual(sheets[0].data[0], ['A', 'B', '中文']);
});
ava_1.default('output', t => {
    const result = Loader_1.Excel().output([
        {
            name: 'Sheet 1',
            data: [['A', 'B', '中文'], ['A1', 'B1', 'C1'], ['A2', 'B2', 'C2'], ['A3', 'B3', 'C3']],
        }
    ]);
    t.true(_.isBuffer(result));
});
ava_1.default('getSheets', t => {
    const sheet_1 = Loader_1.Excel().getSheets('Sheet 1');
    const sheet_2 = Loader_1.Excel().getSheets(0);
    const sheet_3 = Loader_1.Excel().getSheets()[0];
    t.deepEqual(sheet_1, sheet_2);
    t.deepEqual(sheet_2, sheet_3);
});
ava_1.default('getFirstSheet', t => {
    const sheet = Loader_1.Excel().getFirstSheet();
    t.is(sheet.name, 'Sheet 1');
    t.deepEqual(sheet.data[0], ['A', 'B', '中文']);
});
ava_1.default('getSheetHead', t => {
    const RULES = [
        { '中文': 'chinese' },
    ];
    const sheet_head = Loader_1.Excel().getSheetHead(Loader_1.Excel().getFirstSheet(), RULES);
    t.deepEqual(sheet_head, ['A', 'B', 'chinese']);
});
ava_1.default('getSheetBody', t => {
    const sheet_body = Loader_1.Excel().getSheetBody(Loader_1.Excel().getFirstSheet());
    t.deepEqual(sheet_body, [['A1', 'B1', 'C1'], ['A2', 'B2', 'C2'], ['A3', 'B3', 'C3']]);
});
ava_1.default('getArray', t => {
    const sheet_obj = Loader_1.Excel().getArray(Loader_1.Excel().getFirstSheet());
    t.deepEqual(sheet_obj, [
        { A: 'A1', B: 'B1', 中文: 'C1', },
        { A: 'A2', B: 'B2', 中文: 'C2', },
        { A: 'A3', B: 'B3', 中文: 'C3', }
    ]);
});
