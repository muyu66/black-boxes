import { Ioc } from '../Ioc/Ioc';
import { Function } from '../Support/Function';

import { Facade } from './Facade';

const $ = <Function>Facade.getIoc().resolve(Function);

export { $ };