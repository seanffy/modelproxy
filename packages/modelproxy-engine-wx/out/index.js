"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const modelproxy_1 = require("modelproxy");
// import { DefaultEngine } from "modelproxy/out/engines/engine.def";
// import { cacheDec } from "modelproxy/out/engines/engine.cache";
class WXFetchEngine extends modelproxy_1.DefaultEngine {
    constructor(fetchFunc) {
        super();
        this.fetchFunc = fetchFunc;
    }
    /**
     * 初始化
     */
    init() {
        this.use(this.fetch.bind(this));
    }
    /**
     * 发起请求
     * @param  {IProxyCtx}                     ctx  上下文
     * @param  {(s?: string) => Promise<any>}  next 下一个中间件
     * @return {Promise<any>}
     */
    fetch(ctx, next) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { instance, executeInfo = {}, settings = {} } = ctx;
            const { method = "" } = instance || {};
            const { header = {}, timeout = 5000 } = settings;
            const fullPath = this.getFullPath(instance, executeInfo);
            if (!this.fetchFunc) {
                throw new Error("fetch function is null.");
            }
            const fetchFunc = this.fetchFunc.bind(this.fetchFunc, {
                data: executeInfo.data,
                header: header || {},
                method,
                url: fullPath,
            });
            // 发布request请求
            ctx.result = yield Promise.race([
                this.delay(timeout || 5000).then(() => {
                    const err = new Error(`接口请求超时！(${timeout})`);
                    err.name = "timeout";
                    throw err;
                }),
                modelproxy_1.cacheDec(fetchFunc, ctx, fullPath),
            ]);
            yield next();
        });
    }
}
exports.WXFetchEngine = WXFetchEngine;
//# sourceMappingURL=index.js.map