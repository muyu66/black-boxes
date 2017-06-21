"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * IOC
 */
require("reflect-metadata");
const inversify_1 = require("inversify");
const IPinyin_1 = require("../Interface/IPinyin");
const _ = require("lodash");
const pinyin = require('pinyin');
let Pinyin = class Pinyin {
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
    convert(cn, option = IPinyin_1.DEFAULT_OPTION, need_string = true) {
        let res = _.flattenDeep(pinyin(cn, option));
        if (need_string) {
            res = _(res).join('').replace(' ', '');
        }
        return res;
    }
};
Pinyin = __decorate([
    inversify_1.injectable()
], Pinyin);
exports.Pinyin = Pinyin;
