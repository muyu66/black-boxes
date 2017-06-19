import { EncryptionProvider } from '../Encryption/EncryptionProvider';
import { DatabaseProvider } from '../Database/DatabaseProvider';
import { AuthProvider } from '../Auth/AuthProvider';
import { ConfigProvider } from '../Config/ConfigProvider';
import { AmqpProvider } from '../Amqp/AmqpProvider';
import { ExcelProvider } from '../Excel/ExcelProvider';
import { FunctionProvider } from '../Support/FunctionProvider';
import { MailProvider } from '../Mail/MailProvider';
import { PaginateProvider } from '../Paginate/PaginateProvider';
import { RedisProvider } from '../Redis/RedisProvider';
import { ValidatorProvider } from '../Validation/ValidatorProvider';
import { PinyinProvider } from '../Support/PinyinProvider';

const providers = [
    EncryptionProvider,
    DatabaseProvider,
    AuthProvider,
    ConfigProvider,
    AmqpProvider,
    ExcelProvider,
    FunctionProvider,
    MailProvider,
    PaginateProvider,
    RedisProvider,
    ValidatorProvider,
    PinyinProvider,
];

export { providers };