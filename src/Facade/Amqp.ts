import { Ioc } from '../Ioc/Ioc';
import { TYPES } from '../Interface/Map';
import { IAmqpEngine } from '../Interface/IAmqp';

import { Facade } from './Facade';

const Amqp = <IAmqpEngine>Facade.getIoc().resolve(TYPES.IAmqpEngine);

export { Amqp };

