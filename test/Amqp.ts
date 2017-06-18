import test from 'ava';
import { Ioc } from '../src/Ioc/Ioc';
import { Facade } from '../src/Facade/Facade';
import * as _ from 'lodash';
import * as fs from 'fs';

import { Amqp } from '../src/Facade/Loader';

test.before('init Facade', t => {
    const ioc = new Ioc();
    Facade.setIoc(ioc);
});

test('getChannel & setChannel', t => {
    Amqp().setChannel('HANDLE');

    t.is(Amqp().getChannel(), 'HANDLE');
});

test('push', t => {
    Amqp().setChannel('HANDLE');
    Amqp().push({ test: 'test' });
    t.pass();
});