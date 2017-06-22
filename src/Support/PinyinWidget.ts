import { IPinyin } from '../Interface/IPinyin';
import { Widget, TYPES } from '../Interface/Map';
import { Pinyin } from './Pinyin';

export class PinyinWidget {

    static register() {
        const widgets: Widget[] = [
            {
                type: TYPES.IPinyin,
                instance: Pinyin,
            }
        ];

        return widgets;
    }

}