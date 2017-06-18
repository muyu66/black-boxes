import test from 'ava';
import { Ioc } from '../src/Ioc/Ioc';
import { Facade } from '../src/Facade/Facade';
import * as _ from 'lodash';
import * as fs from 'fs';

import { Config } from '../src/Facade/Loader';

test.before('init Facade', t => {
    const ioc = new Ioc();
    Facade.setIoc(ioc);
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