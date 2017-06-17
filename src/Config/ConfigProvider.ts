import { TYPES, Provider } from '../Interface/Map';
import { ConfigManager } from './ConfigManager';

export class ConfigProvider {

    static register() {
        const providers: Provider[] = [
            {
                type: TYPES.IConfigManager,
                instance: ConfigManager,
                singleton: true,
            }
        ];

        return providers;
    }

}