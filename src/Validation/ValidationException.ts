export class ValidationException extends Error {

    public error: string;
    public debug: object;

    constructor(error: string, debug?: object) {
        super(error);
        this.error = error;
        this.debug = debug;
    }

}