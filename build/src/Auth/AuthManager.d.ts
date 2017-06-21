/**
 * IOC
 */
import 'reflect-metadata';
import { Account } from '../Database/Model/Account';
import { IAuthManager, AuthFormat } from '../Interface/IAuth';
export declare class AuthManager implements IAuthManager {
    private encrypter;
    private db;
    private account_id;
    /**
     * 获取已登录的用户帐号信息
     *
     * @returns {Promise<Account>}
     *
     * @memberof AuthManager
     */
    user(): Promise<Account>;
    check(): void;
    createPassword(source: string): string;
    attempt(auth: AuthFormat): Promise<Account | false>;
    logout(): void;
    viaRemember(): void;
    login(account: Account): void;
    loginUsingId(account_id: number): void;
}
