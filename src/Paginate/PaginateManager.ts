/**
 * IOC
 */
import { Function } from '../Support/Function';
import { injectable, inject } from 'inversify';
import 'reflect-metadata';

import { Paginate } from '../Interface/IPaginate';
import * as _ from 'lodash';

@injectable()
export class PaginateManager {

    @inject(Function)
    private $: Function;

    /**
     * Model 分页器
     *
     * @static
     * @template T
     * @param {{ model: T[], page: number, page_total: number }} source
     * @param {string} url
     * @returns {Core.Paginate<T>}
     *
     * @memberof Paginate
     */
    public render<T>(source: T[], page_total: number, page: number, url: string): Paginate<T> {
        const last_page = _.floor(page_total / source.length);
        const last_page_fix = this.$.isFloat(page_total / source.length) ? 1 : 0;

        // 超过最后一页/小于第一页,则变成 null
        const next_page_url = page + 1 > last_page + last_page_fix ? null : `${url}?page=${page + 1}`;
        const prev_page_url = page <= 1 ? null : `${url}?page=${page - 1}`;

        const from = 1 + (page - 1) * source.length;
        const to = source.length * page > page_total ? page_total : source.length * page;

        const res: Paginate<T> = {
            total: page_total,
            perPage: source.length,
            currentPage: page, // 从 1 开始
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
    public custom<T>(sources: T[], per_page: number = 15, i: number = 1, url: string): Paginate<T> {
        i = Number(i); // i 可能是传参过来的字符串

        const last_page = _.floor(sources.length / per_page);
        const last_page_fix = this.$.isFloat(sources.length / per_page) ? 1 : 0;

        // 超过最后一页/小于第一页,则变成 null
        const next_page_url = i + 1 > last_page + last_page_fix ? null : `${url}?page=${i + 1}`;
        const prev_page_url = i <= 1 ? null : `${url}?page=${i - 1}`;

        const from = 1 + (i - 1) * per_page;
        const to = per_page * i > sources.length ? sources.length : per_page * i;

        const res: Paginate<T> = {
            total: sources.length,
            perPage: per_page,
            currentPage: i, // 从 1 开始
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

}