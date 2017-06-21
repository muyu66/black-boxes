import { Validator } from './Validator';
export declare class ValidatorProvider {
    static register(): {
        to_self: boolean;
        instance: typeof Validator;
    }[];
}
