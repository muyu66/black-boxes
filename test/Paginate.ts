import test from 'ava';
import { Kernel } from '../src/Ioc/Kernel';
import { Facade } from '../src/Facade/Facade';
import * as _ from 'lodash';
import * as fs from 'fs';

import { Paginate } from '../src/Facade/Loader';
import { Widgets } from './config/Widget';

test.before('init Facade', t => {
    const kernel = new Kernel();
    kernel.loadWidget(Widgets);
    Facade.set(kernel);
});

test('render', t => {
    const models = [
        { id: 1, name: 'Guzz', },
        { id: 2, name: 'Tuduo', },
        { id: 3, name: 'Bakli', },
    ];

    const result = Paginate().render(models, 30, 1);

    t.is(result.currentPage, 1);
    t.is(result.firstPage, 1);
    t.is(result.lastPage, 10);
    t.is(result.nextPageUrl, 'http://localhost:3000?page=2');
    t.is(result.perPage, models.length);
    t.is(result.prevPageUrl, null);
    t.is(result.from, 1);
    t.is(result.to, 3);
    t.is(result.total, 30);
    t.deepEqual(result.data, models);
});

test('custom', t => {
    const models = [
        { id: 1, name: 'Guzz', },
        { id: 2, name: 'Tuduo', },
        { id: 3, name: 'Bakli', },
    ];

    const result = Paginate().custom(models, 2, 1);

    t.is(result.currentPage, 1);
    t.is(result.firstPage, 1);
    t.is(result.lastPage, 2);
    t.is(result.nextPageUrl, 'http://localhost:3000?page=2');
    t.is(result.perPage, 2);
    t.is(result.prevPageUrl, null);
    t.is(result.from, 1);
    t.is(result.to, 2);
    t.is(result.total, models.length);
    t.deepEqual(result.data, [
        { id: 1, name: 'Guzz', },
        { id: 2, name: 'Tuduo', },
    ]);
});