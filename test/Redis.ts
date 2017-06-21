import test from 'ava';
import { Kernel } from '../src/Ioc/Kernel';
import { Facade } from '../src/Facade/Facade';
import * as _ from 'lodash';
import * as fs from 'fs';

import { Redis } from '../src/Facade/Loader';

test.before('init Facade', t => {
    const kernel = new Kernel();
    Facade.set(kernel);
});

test('set & get', async t => {
    await Redis().set('test', 'test1');
    t.is(await Redis().get('test'), 'test1');
});