import { Function } from './Function';

export class FunctionWidget {

    static register() {
        return [
            {
                to_self: true,
                instance: Function,
            }
        ];
    }

}