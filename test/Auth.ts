import test from 'ava';
import { Ioc } from '../src/Ioc/Ioc';
import { Facade } from '../src/Facade/Facade';
import * as _ from 'lodash';
import * as fs from 'fs';

import { Auth } from '../src/Facade/Loader';

test.before('init Facade', t => {
    const ioc = new Ioc();
    Facade.setIoc(ioc);
});

test('createPassword', t => {
    const pwd = Auth().createPassword('zhouyu');
    t.not(pwd, 'qweasdzxc');
    t.true(_.isString(pwd));
});

test('attempt', async t => {
    const auth = await Auth().attempt({ account: 'zhouyu', password: 'zhouyu' });
    t.true(_.isObject(auth));
    t.is(auth['account'], 'zhouyu');
    t.not(auth['password'], 'zhouyu');
});