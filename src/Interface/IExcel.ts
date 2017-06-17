export interface IExcelManager {
    setFile(file_name: string): void;

    output(datas: { name: string, data: any[] }[], options: { '!merges'?: object, '!cols'?: object }): Buffer;

    getSheets(empty?: undefined): ExcelSheet;
    getSheets(no: number): ExcelSheet;
    getSheets(name: string): ExcelSheet;
    getSheets(sign: string | number | undefined): ExcelSheet | ExcelSheet[];

    getFirstSheet(): ExcelSheet;

    getSheetHead(sheet: ExcelSheet, rules: object[]): string[];

    getSheetBody(sheet: ExcelSheet): string[][];

    convertField(rules: object[], names: string[]): string[];

    getArray(sheet: ExcelSheet, table_head?: string[], table_body?: string[][]): object[];
}

export interface ExcelSheet {
    name: string;
    data: string[][];
}