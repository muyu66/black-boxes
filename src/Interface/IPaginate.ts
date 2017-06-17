export interface Paginate<T> {
    total: number;
    perPage: number;
    currentPage: number;
    firstPage: 1;
    lastPage: number;
    nextPageUrl: string | null;
    prevPageUrl: string | null;
    from: number;
    to: number;
    data: T[];
}