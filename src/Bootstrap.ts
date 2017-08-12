/**
 * 核心 Ioc
 */
export { Kernel } from './ioc/Kernel';

/**
 * 业务逻辑 IoC
 */
export { Service } from './ioc/Service';

/**
 * 控制器相关
 */
export { Controller as Route, Get, Post, Patch, Put, Delete } from 'inversify-express-utils';
export { inject as Import, injectable as Export } from 'inversify';

/**
 * 导出 Facade 核心
 */
export { Facade } from './facade/Facade';

/**
 * 导出各种 Facade 扩展
 */
export * from './facade/Loader';

/**
 * 导出 Express 核心
 */
export { Request, Application as HttpServer } from 'express';

/**
 * 导出 系统挂件
 */
export * from '../src/ioc/Loader';