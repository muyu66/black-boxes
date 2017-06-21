import { Account } from '../Database/Model/Account';
export interface IAuthManager {
    createPassword(source: string): string;
    attempt(auth: AuthFormat): Promise<Account | false>;
}
export interface AuthFormat {
    account: string;
    password: string;
}
