import test from 'ava';
import { Kernel } from '../src/ioc/Kernel';
import { Facade } from '../src/facade/Facade';
import * as _ from 'lodash';
import * as fs from 'fs';

import { Config } from '../src/facade/Loader';
import { Widgets } from './config/Widget';

test.before('init Facade', t => {
    const kernel = new Kernel();
    kernel.loadWidget(Widgets);
    Facade.set(kernel);
});

test('get', t => {
    t.is(Config().get('server.key'), 'saltsaltsalt');
});

test('set', t => {
    const config = {
        'server': {
            'key': 'saltsaltsalt',
            'test': 'testtesttest',
        }
    };

    Config().set(config);

    t.is(Config().get('server.test'), 'testtesttest');
});