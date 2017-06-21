"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 核心 Ioc
 */
var Kernel_1 = require("./Ioc/Kernel");
exports.Kernel = Kernel_1.Kernel;
/**
 * 业务逻辑 IoC
 */
var Service_1 = require("./Ioc/Service");
exports.Service = Service_1.Service;
/**
 * 控制器相关
 */
var inversify_express_utils_1 = require("inversify-express-utils");
exports.Route = inversify_express_utils_1.Controller;
exports.Get = inversify_express_utils_1.Get;
exports.Post = inversify_express_utils_1.Post;
exports.Patch = inversify_express_utils_1.Patch;
exports.Put = inversify_express_utils_1.Put;
exports.Delete = inversify_express_utils_1.Delete;
var inversify_1 = require("inversify");
exports.Import = inversify_1.inject;
exports.Export = inversify_1.injectable;
/**
 * 导出各种 Facade
 */
__export(require("./Facade/Loader"));
