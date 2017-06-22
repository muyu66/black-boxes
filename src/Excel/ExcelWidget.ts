import { TYPES, Widget } from '../Interface/Map';
import { ExcelManager } from './ExcelManager';

export class ExcelWidget {

    static register() {
        const widgets: Widget[] = [
            {
                type: TYPES.IExcelManager,
                instance: ExcelManager,
                singleton: true,
            }
        ];

        return widgets;
    }

}