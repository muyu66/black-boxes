import test from 'ava';
import { Kernel } from '../src/Ioc/Kernel';
import { Facade } from '../src/Facade/Facade';
import * as _ from 'lodash';
import * as fs from 'fs';

import { Database } from '../src/Facade/Loader';
import { Widgets } from './config/Widget';

test.before('init Facade', t => {
    const kernel = new Kernel();
    kernel.loadWidget(Widgets);
    Facade.set(kernel);
});

test('isConnected', t => {
    t.is(Database().isConnected, false);
});

test('getConnection', async t => {
    const db = await Database().getConnection();
    const account = await db.getRepository('Account').findOneById(1);
    t.is(account['id'], 1);
});