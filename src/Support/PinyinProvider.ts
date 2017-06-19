import { IPinyin } from '../Interface/IPinyin';
import { Provider, TYPES } from '../Interface/Map';
import { Pinyin } from './Pinyin';

export class PinyinProvider {

    static register() {
        const providers: Provider[] = [
            {
                type: TYPES.IPinyin,
                instance: Pinyin,
            }
        ];

        return providers;
    }

}