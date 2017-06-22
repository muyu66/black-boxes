import test from 'ava';
import { Kernel } from '../src/Ioc/Kernel';
import { Facade } from '../src/Facade/Facade';
import * as _ from 'lodash';
import * as fs from 'fs';

import { Auth } from '../src/Facade/Loader';
import { Widgets } from './config/Widget';

test.before('init Facade', t => {
    const kernel = new Kernel();
    kernel.loadWidget(Widgets);
    Facade.set(kernel);
});

test('createPassword', t => {
    const pwd = Auth().createPassword('zhouyu');
    t.not(pwd, 'qweasdzxc');
    t.true(_.isString(pwd));
});

// test('attempt', async t => {
//     const auth = await Auth().attempt({ account: 'zhouyu', password: 'zhouyu' });
//     t.true(_.isObject(auth));
//     t.is(auth['account'], 'zhouyu');
//     t.not(auth['password'], 'zhouyu');
// });