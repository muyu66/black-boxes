import test from 'ava';
import { Kernel } from '../src/Ioc/Kernel';
import { Facade } from '../src/Facade/Facade';
import * as _ from 'lodash';
import * as fs from 'fs';

import { $ } from '../src/Facade/Loader';

test.before('init Facade', t => {
    const kernel = new Kernel();
    Facade.set(kernel);
});

test('getAbs', t => {
    t.is($().getAbs(-110), 110);
});

test('isFloat', t => {
    t.true($().isFloat(1.232231863));
    t.false($().isFloat(22));
    t.false($().isFloat(0));
});