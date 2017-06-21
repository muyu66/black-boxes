import 'reflect-metadata';
import { Paginate } from '../Interface/IPaginate';
export declare class PaginateManager {
    private $;
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
    render<T>(source: T[], page_total: number, page: number, url?: string): Paginate<T>;
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
    custom<T>(sources: T[], per_page?: number, i?: number, url?: string): Paginate<T>;
}
