import { AuthManager } from './AuthManager';
export declare class AuthProvider {
    static register(): {
        type: symbol;
        instance: typeof AuthManager;
    }[];
}
