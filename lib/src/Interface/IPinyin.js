"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PINYIN_STYLE = {
    NORMAL: 0,
    TONE: 1,
    TONE2: 2,
    TO3NE: 5,
    INITIALS: 3,
    FIRST_LETTER: 4,
};
exports.DEFAULT_OPTION = {
    style: PINYIN_STYLE.NORMAL,
    segment: false,
    heteronym: false,
};
