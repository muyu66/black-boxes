import { TYPES, Widget } from '../interface/Map';
import { FileManager } from './FileManager';

export class FileWidget {

    static register() {
        const widgets: Widget[] = [
            {
                type: TYPES.IFileManager,
                instance: FileManager,
                singleton: true,
            }
        ];

        return widgets;
    }

}