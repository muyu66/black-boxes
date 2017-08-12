import test from 'ava';

import { Kernel } from '../src/ioc/Kernel';
import { Service } from '../src/ioc/Service';

import { Facade } from '../src/facade/Facade';
import * as _ from 'lodash';
import * as fs from 'fs';
import { Application } from 'express';
import { Container, injectable, inject } from 'inversify';
import { interfaces, Controller, InversifyExpressServer, TYPE, Get } from 'inversify-express-utils';
import * as supertest from 'supertest';

import { Widgets } from './config/Widget';

import { Server } from '../src/facade/Loader';

test.before('init Facade', t => {
    const kernel = new Kernel();
    kernel.loadWidget(Widgets);
    Facade.set(kernel);
});

@injectable()
class Service1 {
    public hello() {
        return '德语';
    }
}

@injectable()
@Controller('/')
class Controller1 {
    constructor( @inject(Service1.name) private service: Service1) { }
    @Get('/')
    public getHello() {
        return this.service.hello();
    }
}

test('set & get', async t => {
    const service = new Service();
    service.bindController(Controller1);
    service.bindService(Service1);
    Server().set(service.get());

    const server = Server().get();
    const app = <Application>server.build();
    app.listen(3088);

    const request = supertest.agent(app);

    await request.get('/')
        .expect(function (res) {
            t.is(res.text, '德语');
        });
});