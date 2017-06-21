/// <reference types="node" />
export interface IExcelManager {
    get(): ExcelSheet[];
    input(source: string | ExcelSheet[]): void;
    output(datas: ExcelSheet[], options?: {
        '!merges'?: object;
        '!cols'?: object;
    }): Buffer;
    getSheets(empty?: undefined): ExcelSheet;
    getSheets(no: number): ExcelSheet;
    getSheets(name: string): ExcelSheet;
    getSheets(sign: string | number | undefined): ExcelSheet | ExcelSheet[];
    getFirstSheet(): ExcelSheet;
    getSheetHead(sheet: ExcelSheet, rules: object[]): string[];
    getSheetBody(sheet: ExcelSheet): string[][];
    getArray(sheet: ExcelSheet, table_head?: string[], table_body?: string[][]): object[];
}
export interface ExcelSheet {
    name: string;
    data: string[][];
}
