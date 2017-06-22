import test from 'ava';
import { Kernel } from '../src/Ioc/Kernel';
import { Facade } from '../src/Facade/Facade';
import * as _ from 'lodash';
import * as fs from 'fs';

import { Amqp } from '../src/Facade/Loader';
import { Widgets } from './config/Widget';

test.before('init Facade', t => {
    const kernel = new Kernel();
    kernel.loadWidget(Widgets);
    Facade.set(kernel);
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