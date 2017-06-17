import { Validator } from './Validator';

export class ValidatorProvider {

    static register() {
        return [
            {
                to_self: true,
                instance: Validator,
            }
        ];
    }

}