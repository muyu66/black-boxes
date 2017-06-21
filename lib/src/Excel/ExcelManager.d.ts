/// <reference types="node" />
/**
 * IOC
 */
import { IExcelManager, ExcelSheet } from '../Interface/IExcel';
import 'reflect-metadata';
export declare class ExcelManager implements IExcelManager {
    private sheets;
    input(source: string | ExcelSheet[]): void;
    get(): ExcelSheet[];
    /**
     * 导出文件
     *
     * @param {string} name
     * @param {any[]} data
     * @returns {Buffer}
     *
     * @memberof Excel
     */
    output(datas: ExcelSheet[], options?: {
        '!merges'?: object;
        '!cols'?: object;
    }): Buffer;
    getSheets(empty?: undefined): ExcelSheet;
    getSheets(no: number): ExcelSheet;
    getSheets(name: string): ExcelSheet;
    getFirstSheet(): ExcelSheet;
    /**
     * 获取指定 Sheet 的表头
     *
     * @param {ExcelSheet} sheet
     * @param {object[]} [rules=[{'中文名':'对应英文名'}]] 转换表头时用
     * @returns {string[]}
     *
     * @memberof Excel
     */
    getSheetHead(sheet: ExcelSheet, rules?: object[]): string[];
    getSheetBody(sheet: ExcelSheet): string[][];
    private convertField(rules, names);
    getArray(sheet: ExcelSheet, table_head?: string[], table_body?: string[][]): object[];
}
