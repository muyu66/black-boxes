import { Validator } from './Validator';

export class ValidatorWidget {

    static register() {
        return [
            {
                to_self: true,
                instance: Validator,
            }
        ];
    }

}