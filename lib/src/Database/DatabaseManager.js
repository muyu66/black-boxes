"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Path = require("path");
const _ = require("lodash");
const inversify_1 = require("inversify");
require("reflect-metadata");
const Map_1 = require("../Interface/Map");
let DatabaseManager = class DatabaseManager {
    constructor(config) {
        /**
         * 是否已经连接
         *
         * @type {boolean}@memberof DatabaseManager
         */
        this.isConnected = false;
        /**
         * 数据库池 连接名
         *
         * @private
         * @memberof DatabaseManager
         */
        this.connect_name = 'mysql1';
        // 取出 数据库配置对象
        const database = config.get('database');
        // 格式化配置
        const option = {
            type: database['using'],
        };
        _.assign(option, database[database['using']]);
        this.option = option;
    }
    getConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.isConnected) {
                yield this.connect();
            }
            return this.db;
        });
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            const entitiey_path = Path.normalize(__dirname + '/Model/*.js');
            yield typeorm_1.createConnection({
                name: this.connect_name,
                driver: this.option,
                entities: [entitiey_path],
                autoSchemaSync: false,
            });
            this.db = typeorm_1.getConnection(this.connect_name);
            this.isConnected = true;
        });
    }
};
DatabaseManager = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(Map_1.TYPES.IConfigManager)),
    __metadata("design:paramtypes", [Object])
], DatabaseManager);
exports.DatabaseManager = DatabaseManager;
