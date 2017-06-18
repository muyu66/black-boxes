import test from 'ava';
import { Ioc } from '../src/Ioc/Ioc';
import { Facade } from '../src/Facade/Facade';
import * as _ from 'lodash';
import * as fs from 'fs';

import { Database } from '../src/Facade/Loader';

test.before('init Facade', t => {
    const ioc = new Ioc();
    Facade.setIoc(ioc);
});

test('isConnected', t => {
    t.is(Database().isConnected, false);
});

test('getConnection', async t => {
    const db = await Database().getConnection();
    const account = await db.getRepository('Account').findOneById(1);
    t.is(account['id'], 1);
});