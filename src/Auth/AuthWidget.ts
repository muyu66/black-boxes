import { TYPES } from '../Interface/Map';
import { AuthManager } from './AuthManager';

export class AuthWidget {

    static register() {
        return [
            {
                type: TYPES.IAuthManager,
                instance: AuthManager,
            }
        ];
    }

}