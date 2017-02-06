import { ModelProxy } from "./libs/modelproxy";
import { IEngine } from './models/engine';
import * as compose from './libs/compose';
import * as baseFactory from "./libs/base.factory";
import * as schemas from "./schemas/builder";
import * as methodtype from "./models/method";
declare var _default: {
    ModelProxy: typeof ModelProxy.ModelProxy;
    engineFactory: baseFactory.ModelProxy.BaseFactory<IEngine>;
    Compose: typeof compose.ModelProxy.Compose;
    modelProxySchemaUtils: {
        proxyConfigSchema: JsonSchema;
        interfaceSchema: JsonSchema;
        JsonSchemaBuilder: typeof schemas.ModleProxySchema.JsonSchemaBuilder;
    };
};
export default _default;
export declare const methods: typeof methodtype.MethodType;