export interface IPinyin {
    convert(cn: string, option?: PinyinOption, need_string?: boolean): any[] | string;
}

export interface PinyinOption {
    style?: number;
    segment?: boolean; // 是否启用分词模式，中文分词有助于极大的降低多音字问题。 但性能会极大的下降，内存也会使用更多。
    heteronym?: boolean; // 是否启用多音字模式，默认关闭
}

const PINYIN_STYLE = {
    NORMAL: 0,       // 普通风格，不带音标。
    TONE: 1,         // 标准风格，音标在韵母的第一个字母上。
    TONE2: 2,        // 声调以数字形式在拼音之后，使用数字 0~4 标识。
    TO3NE: 5,        // 声调以数字形式在声母之后，使用数字 0~4 标识。
    INITIALS: 3,     // 仅需要声母部分。
    FIRST_LETTER: 4, // 仅保留首字母。
};

export const DEFAULT_OPTION = {
    style: PINYIN_STYLE.NORMAL,
    segment: false,
    heteronym: false,
};