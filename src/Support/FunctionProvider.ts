import { Function } from './Function';

export class FunctionProvider {

    static register() {
        return [
            {
                to_self: true,
                instance: Function,
            }
        ];
    }

}