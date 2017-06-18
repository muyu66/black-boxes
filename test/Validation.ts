import test from 'ava';
import { Ioc } from '../src/Ioc/Ioc';
import { Facade } from '../src/Facade/Facade';
import * as _ from 'lodash';
import * as fs from 'fs';

import { Validation } from '../src/Facade/Loader';

test.before('init Facade', t => {
    const ioc = new Ioc();
    Facade.setIoc(ioc);
});

test('render error [require]', async t => {
    const params = {
        name: undefined,
    }
    const rules = {
        name: 'require',
    };

    await t.throws(Validation().render(params, rules));
});

test('render error [len]', async t => {
    const params = {
        name: 'Boy',
    }
    const rules = {
        name: 'len:6:100',
    };

    await t.throws(Validation().render(params, rules));
});

test('render successfully [len]', async t => {
    const params = {
        name: 'Boy',
    }
    const rules = {
        name: 'len:2:100',
    };

    await t.notThrows(Validation().render(params, rules));
});