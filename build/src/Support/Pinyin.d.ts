/**
 * IOC
 */
import 'reflect-metadata';
import { PinyinOption } from '../Interface/IPinyin';
export declare class Pinyin {
    /**
     * 将中文转化成拼音
     *
     * @param {string} cn
     * @param {PinyinOption} [option=DEFAULT_OPTION]
     * @param {boolean} [need_string=true] true: 返回字符串; false: 返回数组
     * @returns {(any[] | string)}
     *
     * @memberof Pinyin
     */
    convert(cn: string, option?: PinyinOption, need_string?: boolean): any[] | string;
}
