/**
 * IOC
 */
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { IPinyin, PinyinOption, DEFAULT_OPTION } from '../Interface/IPinyin';
import { TYPES } from '../Interface/Map';

import * as _ from 'lodash';
const pinyin = require('pinyin');

@injectable()
export class Pinyin {

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
    convert(cn: string, option: PinyinOption = DEFAULT_OPTION, need_string: boolean = true): any[] | string {
        let res: any[] | string = _.flattenDeep(pinyin(cn, option));
        if (need_string) {
            res = _(res).join('').replace(' ', '');
        }
        return res;
    }

}