import { IEngine } from "../models/engine";
import { IInterfaceModel } from "../models/interface";
import { BaseEngine } from "./engine.base";
import { IExecute } from "../models/execute";
import { IProxyCtx } from "../models/proxyctx";

/**
 * 默认的engine
 * 返回接口的实例
 */
export class DefaultEngine extends BaseEngine {
    constructor() {
        super();

        this.use((ctx: IProxyCtx, next: Function) => {
            console.log((ctx.instance as any).title, (ctx.instance as any).method, this.getFullPath(ctx.instance as any, ctx.executeInfo as any));

            next();
        });
    }

    /**
     * 调用接口，这里触发一次中间件方法
     * @param instance 接口的实例
     * @param options  接口的调用参数
     * @returns {Promise<any>}
     */
    public async proxy(instance: IInterfaceModel, options: IExecute): Promise<any> {
        const fn = this.callback(),
            res: IProxyCtx = await fn({
                executeInfo: options,
                instance: instance
            });

        if (res.isError) {
            throw res.err;
        }

        return instance;
        // return this.getFullPath(instance, options);
    }
}
