export declare class ValidationException extends Error {
    error: string;
    debug: object;
    constructor(error: string, debug?: object);
}
