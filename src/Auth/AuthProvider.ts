import { TYPES } from '../Interface/Map';
import { AuthManager } from './AuthManager';

export class AuthProvider {

    static register() {
        return [
            {
                type: TYPES.IAuthManager,
                instance: AuthManager,
            }
        ];
    }

}