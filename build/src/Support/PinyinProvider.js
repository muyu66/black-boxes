"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Map_1 = require("../Interface/Map");
const Pinyin_1 = require("./Pinyin");
class PinyinProvider {
    static register() {
        const providers = [
            {
                type: Map_1.TYPES.IPinyin,
                instance: Pinyin_1.Pinyin,
            }
        ];
        return providers;
    }
}
exports.PinyinProvider = PinyinProvider;
