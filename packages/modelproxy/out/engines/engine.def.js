"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const engine_base_1 = require("./engine.base");
const compose_1 = require("../libs/compose");
class DefaultEngine extends engine_base_1.BaseEngine {
    constructor() {
        super();
        this.use(async (ctx, next) => {
            await next("");
        });
    }
    async proxy(instance, options, ...otherOptions) {
        const { before, after } = options;
        const c = new compose_1.Compose();
        if (before) {
            c.merge(before);
        }
        c.merge(this);
        if (after) {
            c.merge(after);
        }
        const ctx = await c.callback()(Object.assign({ executeInfo: options, instance }, otherOptions));
        if (ctx.isError) {
            throw ctx.err;
        }
        return ctx;
    }
}
exports.DefaultEngine = DefaultEngine;
