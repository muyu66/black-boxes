import test from 'ava';
import { Kernel } from '../src/Ioc/Kernel';
import { Facade } from '../src/Facade/Facade';

import { Pinyin } from '../src/Facade/Loader';

test.before('init Facade', t => {
    const kernel = new Kernel();
    Facade.set(kernel);
});

test('convert', t => {
    const pinyin_str = Pinyin().convert('中文', undefined, true);
    const pinyin_array = Pinyin().convert('中文', undefined, false);

    t.is(pinyin_str, 'zhongwen');
    t.deepEqual(pinyin_array, ['zhong', 'wen']);
});