import test from 'ava';
import { Kernel } from '../src/Ioc/Kernel';
import { Facade } from '../src/Facade/Facade';
import * as _ from 'lodash';
import * as fs from 'fs';

import { Excel } from '../src/Facade/Loader';
import { Widgets } from './config/Widget';

test.before('init Facade', t => {
    const kernel = new Kernel();
    kernel.loadWidget(Widgets);
    Facade.set(kernel);
});

test.before('init Excel', t => {
    Excel().input([
        {
            name: 'Sheet 1',
            data: [['A', 'B', '中文'], ['A1', 'B1', 'C1'], ['A2', 'B2', 'C2'], ['A3', 'B3', 'C3']],
        }
    ]);
});

test('get', t => {
    const sheets = Excel().get();
    t.true(_.isArray(sheets));
    t.is(sheets[0].name, 'Sheet 1');
    t.deepEqual(sheets[0].data[0], ['A', 'B', '中文']);
});

test('output', t => {
    const result = Excel().output([
        {
            name: 'Sheet 1',
            data: [['A', 'B', '中文'], ['A1', 'B1', 'C1'], ['A2', 'B2', 'C2'], ['A3', 'B3', 'C3']],
        }
    ]);

    t.true(_.isBuffer(result));
});

test('getSheets', t => {
    const sheet_1 = Excel().getSheets('Sheet 1');
    const sheet_2 = Excel().getSheets(0);
    const sheet_3 = Excel().getSheets()[0];

    t.deepEqual(sheet_1, sheet_2);
    t.deepEqual(sheet_2, sheet_3);
});

test('getFirstSheet', t => {
    const sheet = Excel().getFirstSheet();
    t.is(sheet.name, 'Sheet 1');
    t.deepEqual(sheet.data[0], ['A', 'B', '中文']);
});

test('getSheetHead', t => {
    const RULES = [
        { '中文': 'chinese' },
    ];

    const sheet_head = Excel().getSheetHead(Excel().getFirstSheet(), RULES);
    t.deepEqual(sheet_head, ['A', 'B', 'chinese']);
});

test('getSheetBody', t => {
    const sheet_body = Excel().getSheetBody(Excel().getFirstSheet());
    t.deepEqual(sheet_body, [['A1', 'B1', 'C1'], ['A2', 'B2', 'C2'], ['A3', 'B3', 'C3']]);
});

test('getArray', t => {
    const sheet_obj = Excel().getArray(Excel().getFirstSheet());
    t.deepEqual(sheet_obj, [
        { A: 'A1', B: 'B1', 中文: 'C1', },
        { A: 'A2', B: 'B2', 中文: 'C2', },
        { A: 'A3', B: 'B3', 中文: 'C3', }
    ]);
});