import test from 'ava';
import { Ioc } from '../src/Ioc/Ioc';
import { Facade } from '../src/Facade/Facade';
import * as _ from 'lodash';
import * as fs from 'fs';

import { Mail } from '../src/Facade/Loader';

test.before('init Facade', t => {
    const ioc = new Ioc();
    Facade.setIoc(ioc);
});

/**
 * FIXME: test.skip() 可能存在问题
 */
test('send - 不将运行', async t => {

    // const result = await Mail().send({
    //     from: 'muyu.zhouyu@gmail.com',
    //     to: 'zhouyu_66@163.com',
    //     subject: 'Hello guys !',
    //     text: 'Hello, this is my email.',
    // });

    // t.true(result);
    t.pass();
});

test('test', async t => {
    const result = await Mail().test();

    t.true(result);
});