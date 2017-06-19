import test from 'ava';
import { Ioc } from '../src/Ioc/Ioc';
import { Facade } from '../src/Facade/Facade';
import * as _ from 'lodash';
import * as fs from 'fs';
import { Application } from 'express';
import { Container, injectable, inject } from 'inversify';
import { interfaces, Controller, InversifyExpressServer, TYPE, Get } from 'inversify-express-utils';
import * as supertest from 'supertest';

import { Server } from '../src/Facade/Loader';

test.before('init Facade', t => {
    const ioc = new Ioc();
    Facade.setIoc(ioc);
});

const SERVICE1 = Symbol('Service1');

@injectable()
class Service1 {
    public hello() {
        return 'hello';
    }
}

@injectable()
@Controller('/')
class Controller1 {
    constructor( @inject(SERVICE1) private service: Service1) { }
    @Get('/')
    public getHello() {
        return this.service.hello();
    }
}

test('set & get', async t => {
    const container = new Container();
    container.bind(TYPE.Controller).to(Controller1).whenTargetNamed('Controller1');
    container.bind(SERVICE1).to(Service1);
    Server().set(container);

    const server = Server().get();
    const app = <Application>server.build();
    app.listen(3088);

    const request = supertest.agent(app);

    await request.get('/')
        .expect(function (res) {
            t.is(res.text, 'hello');
        });
});