"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EncryptionProvider_1 = require("../Encryption/EncryptionProvider");
const DatabaseProvider_1 = require("../Database/DatabaseProvider");
const AuthProvider_1 = require("../Auth/AuthProvider");
const ConfigProvider_1 = require("../Config/ConfigProvider");
const AmqpProvider_1 = require("../Amqp/AmqpProvider");
const ExcelProvider_1 = require("../Excel/ExcelProvider");
const FunctionProvider_1 = require("../Support/FunctionProvider");
const MailProvider_1 = require("../Mail/MailProvider");
const PaginateProvider_1 = require("../Paginate/PaginateProvider");
const RedisProvider_1 = require("../Redis/RedisProvider");
const ValidatorProvider_1 = require("../Validation/ValidatorProvider");
const PinyinProvider_1 = require("../Support/PinyinProvider");
const ServerProvider_1 = require("../Server/ServerProvider");
const providers = [
    EncryptionProvider_1.EncryptionProvider,
    DatabaseProvider_1.DatabaseProvider,
    AuthProvider_1.AuthProvider,
    ConfigProvider_1.ConfigProvider,
    AmqpProvider_1.AmqpProvider,
    ExcelProvider_1.ExcelProvider,
    FunctionProvider_1.FunctionProvider,
    MailProvider_1.MailProvider,
    PaginateProvider_1.PaginateProvider,
    RedisProvider_1.RedisProvider,
    ValidatorProvider_1.ValidatorProvider,
    PinyinProvider_1.PinyinProvider,
    ServerProvider_1.ServerProvider,
];
exports.providers = providers;
