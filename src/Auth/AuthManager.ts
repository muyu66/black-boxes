/**
 * IOC
 */
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { IEncrypter } from '../Interface/IEncryption';
import { IDatabaseManager } from '../Interface/IDatabase';
import { TYPES } from '../Interface/Map';

import { Account } from '../Database/Model/Account';
import { IAuthManager, AuthFormat } from '../Interface/IAuth';

@injectable()
export class AuthManager implements IAuthManager {

    @inject(TYPES.IEncrypter)
    private encrypter: IEncrypter;

    @inject(TYPES.IDatabaseManager)
    private db: IDatabaseManager;

    private account_id: number;

    /**
     * 获取已登录的用户帐号信息
     *
     * @returns {Promise<Account>}
     *
     * @memberof AuthManager
     */
    async user(): Promise<Account> {
        const db = await this.db.getConnection();
        const account = await db.getRepository(Account)
            .findOne({ is_deleted: 0, id: this.account_id });

        return account;
    }

    check() {

    }

    createPassword(source: string): string {
        return this.encrypter.make(source);
    }

    async attempt(auth: AuthFormat): Promise<Account | false> {
        const db = await this.db.getConnection();
        const account = await db.getRepository(Account)
            .findOne({ is_deleted: 0, account: auth.account });

        if (!account) {
            return false;
        }

        if (!account || account.password !== this.encrypter.make(auth.password)) {
            return false;
        }

        return account;
    }

    logout() {

    }

    // 可以使用 viaRemember 方法来检查这个用户是否使用「记住我」 cookie 来做认证
    viaRemember() {

    }

    login(account: Account) {

    }

    loginUsingId(account_id: number): void {
        this.account_id = account_id;
    }

}