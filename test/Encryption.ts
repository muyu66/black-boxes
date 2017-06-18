import test from 'ava';
import { Ioc } from '../src/Ioc/Ioc';
import { Facade } from '../src/Facade/Facade';

import { Encryption } from '../src/Facade/Loader';
import { Config } from '../src/Facade/Config';
import * as _ from 'lodash';
import * as fs from 'fs';

test.before('init Facade', t => {
    const ioc = new Ioc();
    Facade.setIoc(ioc);
});

test('getKey', t => {
    t.is(Encryption().getKey(), 'saltsaltsalt');
});

test('encrypt, decrypt', t => {
    const encrypt_value = Encryption().encrypt('abc');
    const decrypt_value = Encryption().decrypt(encrypt_value);

    t.true(_.isString(encrypt_value));
    t.is(decrypt_value, 'abc');
    t.not(encrypt_value, 'abc');
});

test('make', t => {
    const value = Encryption().make('abc');
    t.true(_.isString(value));
    t.not(value, 'abc');
});