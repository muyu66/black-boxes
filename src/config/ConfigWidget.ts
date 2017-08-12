import { TYPES, Widget } from '../interface/Map';
import { ConfigManager } from './ConfigManager';

export class ConfigWidget {

    static register() {
        const widgets: Widget[] = [
            {
                type: TYPES.IConfigManager,
                instance: ConfigManager,
                singleton: true,
            }
        ];

        return widgets;
    }

}