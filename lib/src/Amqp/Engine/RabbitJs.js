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
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
require("reflect-metadata");
const Map_1 = require("../../Interface/Map");
const amqp = require("rabbit.js");
let RabbitJs = class RabbitJs {
    constructor(config) {
        const address = config.get('amqp.rabbit_js.address');
        this.ct = amqp.createContext(address);
    }
    setChannel(channel_name) {
        this.channel_name = channel_name;
    }
    getChannel() {
        return this.channel_name;
    }
    push(data) {
        const send = this.ct.socket('PUSH', { routing: 'direct', prefetch: 1 });
        send.connect(this.channel_name);
        send.write(JSON.stringify(data), 'utf8');
    }
};
RabbitJs = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(Map_1.TYPES.IConfigManager)),
    __metadata("design:paramtypes", [Object])
], RabbitJs);
exports.RabbitJs = RabbitJs;
