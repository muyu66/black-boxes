import { TYPES, Provider } from '../Interface/Map';
import { ExcelManager } from './ExcelManager';

export class ExcelProvider {

    static register() {
        const providers: Provider[] = [
            {
                type: TYPES.IExcelManager,
                instance: ExcelManager,
                singleton: true,
            }
        ];

        return providers;
    }

}