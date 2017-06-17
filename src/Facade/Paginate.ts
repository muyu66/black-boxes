import { Ioc } from '../Ioc/Ioc';
import { PaginateManager } from '../Paginate/PaginateManager';

import { Facade } from './Facade';

const Paginate = <PaginateManager>Facade.getIoc().resolve(PaginateManager);

export { Paginate };