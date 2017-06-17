import { TYPES } from '../Interface/Map';
import { ExcelManager } from './ExcelManager';

export class ExcelProvider {

    static register() {
        return [
            {
                type: TYPES.IExcelManager,
                instance: ExcelManager,
            }
        ];
    }

}