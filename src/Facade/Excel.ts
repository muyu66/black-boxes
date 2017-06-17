import { Ioc } from '../Ioc/Ioc';
import { TYPES } from '../Interface/Map';
import { IExcelManager } from '../Interface/IExcel';

import { Facade } from './Facade';

const Excel = <IExcelManager>Facade.getIoc().resolve(TYPES.IExcelManager);

export { Excel };