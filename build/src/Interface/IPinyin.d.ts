export interface IPinyin {
    convert(cn: string, option?: PinyinOption, need_string?: boolean): any[] | string;
}
export interface PinyinOption {
    style?: number;
    segment?: boolean;
    heteronym?: boolean;
}
export declare const DEFAULT_OPTION: {
    style: number;
    segment: boolean;
    heteronym: boolean;
};
