/**
 * IOC
 */
import { IExcelManager, ExcelSheet } from '../Interface/IExcel';
import { injectable } from 'inversify';
import 'reflect-metadata';

import xlsx from 'node-xlsx'; // FIXME: 不支持 TS
import * as _ from 'lodash';

@injectable()
export class ExcelManager implements IExcelManager {

    private sheets: ExcelSheet[];

    constructor(file_name?: string) {
        if (file_name) {
            this.sheets = xlsx.parse(file_name);
        }
    }

    public setFile(file_name: string): void {
        this.sheets = xlsx.parse(file_name);
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
    output(datas: { name: string, data: any[] }[], options: { '!merges'?: object, '!cols'?: object }): Buffer {
        return xlsx.build(datas, options);
    }

    getSheets(empty?: undefined): ExcelSheet;
    getSheets(no: number): ExcelSheet;
    getSheets(name: string): ExcelSheet;
    getSheets(sign: string | number | undefined): ExcelSheet | ExcelSheet[] {
        if (typeof sign === 'string') {
            // TODO: 可能会有重名
            return _.filter(this.sheets, ['name', sign])[0];
        } else if (typeof sign === 'number') {
            return this.sheets[sign];
        }
        else {
            return this.sheets;
        }
    }

    getFirstSheet(): ExcelSheet {
        return this.getSheets(0);
    }

    /**
     * 获取指定 Sheet 的表头
     *
     * @param {ExcelSheet} sheet
     * @param {object[]} [rules=[]] 转换表头时用
     * @returns {string[]}
     *
     * @memberof Excel
     */
    getSheetHead(sheet: ExcelSheet, rules: object[] = []): string[] {
        if (_.isEmpty(rules)) return sheet.data[0];
        return this.convertField(rules, sheet.data[0]);
    }

    getSheetBody(sheet: ExcelSheet): string[][] {
        return _.tail(sheet.data);
    }

    convertField(rules: object[], names: string[]): string[] {
        if (!_.isArray(names)) {
            names = [names];
        }
        let res: string[] = [];
        for (const name of names) {
            const datas = _.filter(rules, name);
            if (!_.isEmpty(datas)) {
                res.push(datas[0][name]);
            } else {
                res.push(name);
            }
        }
        return res;
    }

    getArray(sheet: ExcelSheet, table_head?: string[], table_body?: string[][]): object[] {
        if (!table_head) {
            table_head = this.getSheetHead(sheet);
        }
        if (!table_body) {
            table_body = this.getSheetBody(sheet);
        }

        let res: object[] = [];

        for (const item of table_body) {
            res.push(_.zipObject(table_head, item));
        }

        return res;
    }

}