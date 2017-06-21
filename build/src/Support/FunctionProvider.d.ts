import { Function } from './Function';
export declare class FunctionProvider {
    static register(): {
        to_self: boolean;
        instance: typeof Function;
    }[];
}
