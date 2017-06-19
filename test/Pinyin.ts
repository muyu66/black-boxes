import test from 'ava';
import { Ioc } from '../src/Ioc/Ioc';
import { Facade } from '../src/Facade/Facade';

import { Pinyin } from '../src/Facade/Loader';

test.before('init Facade', t => {
    const ioc = new Ioc();
    Facade.setIoc(ioc);
});

test('convert', t => {
    const pinyin_str = Pinyin().convert('中文', undefined, true);
    const pinyin_array = Pinyin().convert('中文', undefined, false);

    t.is(pinyin_str, 'zhongwen');
    t.deepEqual(pinyin_array, ['zhong', 'wen']);
});