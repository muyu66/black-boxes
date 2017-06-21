"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ValidationException extends Error {
    constructor(error, debug) {
        super(error);
        this.error = error;
        this.debug = debug;
    }
}
exports.ValidationException = ValidationException;
