import { Ioc } from '../Ioc/Ioc';
import { Validator } from '../Validation/Validator';

import { Facade } from './Facade';

const Validation = <Validator>Facade.getIoc().resolve(Validator);

export { Validation };