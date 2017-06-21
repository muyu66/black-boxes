"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
require("reflect-metadata");
const node_xlsx_1 = require("node-xlsx"); // FIXME: 不支持 TS
const _ = require("lodash");
let ExcelManager = class ExcelManager {
    input(source) {
        if (typeof source === 'string') {
            this.sheets = node_xlsx_1.default.parse(source);
        }
        else {
            this.sheets = source;
        }
    }
    get() {
        return this.sheets;
    }
    /**
     * 导出文件
     *
     * @param {string} name
     * @param {any[]} data
     * @returns {Buffer}
     *
     * @memberof Excel
     */
    output(datas, options) {
        return node_xlsx_1.default.build(datas, options);
    }
    getSheets(sign) {
        if (typeof sign === 'string') {
            // TODO: 可能会有重名
            return _.filter(this.sheets, ['name', sign])[0];
        }
        else if (typeof sign === 'number') {
            return this.sheets[sign];
        }
        else {
            return this.sheets;
        }
    }
    getFirstSheet() {
        return this.getSheets(0);
    }
    /**
     * 获取指定 Sheet 的表头
     *
     * @param {ExcelSheet} sheet
     * @param {object[]} [rules=[{'中文名':'对应英文名'}]] 转换表头时用
     * @returns {string[]}
     *
     * @memberof Excel
     */
    getSheetHead(sheet, rules = []) {
        if (_.isEmpty(rules))
            return sheet.data[0];
        return this.convertField(rules, sheet.data[0]);
    }
    getSheetBody(sheet) {
        return _.tail(sheet.data);
    }
    convertField(rules, names) {
        if (!_.isArray(names)) {
            names = [names];
        }
        let res = [];
        for (const name of names) {
            const datas = _.filter(rules, name);
            if (!_.isEmpty(datas)) {
                res.push(datas[0][name]);
            }
            else {
                res.push(name);
            }
        }
        return res;
    }
    getArray(sheet, table_head, table_body) {
        if (!table_head) {
            table_head = this.getSheetHead(sheet);
        }
        if (!table_body) {
            table_body = this.getSheetBody(sheet);
        }
        let res = [];
        for (const item of table_body) {
            res.push(_.zipObject(table_head, item));
        }
        return res;
    }
};
ExcelManager = __decorate([
    inversify_1.injectable()
], ExcelManager);
exports.ExcelManager = ExcelManager;
