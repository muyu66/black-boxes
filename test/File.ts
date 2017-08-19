import test from 'ava';
import { Kernel } from '../src/ioc/Kernel';
import { Facade } from '../src/facade/Facade';
import * as _ from 'lodash';
import * as fs from 'fs';

import { File } from '../src/facade/Loader';
import { Widgets } from './config/Widget';

test.before('init Facade', t => {
    const kernel = new Kernel();
    kernel.loadWidget(Widgets);
    Facade.set(kernel);
});

test('list', async t => {
    const lists = await File().dir('./').list();
    t.true(_.isArray(lists));
});