"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * IOC
 */
const Function_1 = require("../Support/Function");
const inversify_1 = require("inversify");
require("reflect-metadata");
const _ = require("lodash");
let PaginateManager = class PaginateManager {
    /**
     * Model 分页器
     *
     * @template T
     * @param {T[]} source 已经从 Model 里切分过了
     * @param {number} page_total 从整个 Model 里拿到的 总共数量
     * @param {number} page
     * @param {string} [url]
     * @returns {Paginate<T>}
     *
     * @memberof PaginateManager
     */
    render(source, page_total, page, url) {
        if (!url) {
            url = 'http://localhost:3000';
        }
        const last_page = _.floor(page_total / source.length);
        const last_page_fix = this.$.isFloat(page_total / source.length) ? 1 : 0;
        // 超过最后一页/小于第一页,则变成 null
        const next_page_url = page + 1 > last_page + last_page_fix ? null : `${url}?page=${page + 1}`;
        const prev_page_url = page <= 1 ? null : `${url}?page=${page - 1}`;
        const from = 1 + (page - 1) * source.length;
        const to = source.length * page > page_total ? page_total : source.length * page;
        const res = {
            total: page_total,
            perPage: source.length,
            currentPage: page,
            firstPage: 1,
            lastPage: last_page + last_page_fix,
            nextPageUrl: next_page_url,
            prevPageUrl: prev_page_url,
            from: from,
            to: to,
            data: source,
        };
        return res;
    }
    /**
     * 自定义分页器
     *
     * @static
     * @param {any[]} sources 源数组
     * @param {number} [per_page=15] 每页最大数量
     * @param {string} url 当前网址
     * @param {number} [i=1] 指定需要哪一页
     * @returns {Paginate}
     *
     * @memberOf Paginate
     * @updateTime 1493286014651
     */
    custom(sources, per_page = 15, i = 1, url) {
        i = Number(i); // i 可能是传参过来的字符串
        if (!url) {
            url = 'http://localhost:3000';
        }
        const last_page = _.floor(sources.length / per_page);
        const last_page_fix = this.$.isFloat(sources.length / per_page) ? 1 : 0;
        // 超过最后一页/小于第一页,则变成 null
        const next_page_url = i + 1 > last_page + last_page_fix ? null : `${url}?page=${i + 1}`;
        const prev_page_url = i <= 1 ? null : `${url}?page=${i - 1}`;
        const from = 1 + (i - 1) * per_page;
        const to = per_page * i > sources.length ? sources.length : per_page * i;
        const res = {
            total: sources.length,
            perPage: per_page,
            currentPage: i,
            firstPage: 1,
            lastPage: last_page + last_page_fix,
            nextPageUrl: next_page_url,
            prevPageUrl: prev_page_url,
            from: from,
            to: to,
            data: _.slice(sources, from - 1, to)
        };
        return res;
    }
};
__decorate([
    inversify_1.inject(Function_1.Function),
    __metadata("design:type", Function_1.Function)
], PaginateManager.prototype, "$", void 0);
PaginateManager = __decorate([
    inversify_1.injectable()
], PaginateManager);
exports.PaginateManager = PaginateManager;
