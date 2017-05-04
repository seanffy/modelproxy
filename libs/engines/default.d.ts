import { IInterfaceModel } from '../models/interface';
import * as base from './base';
import { IExecute } from '../models/execute';
export declare namespace ModelProxyEngine {
    class DefaultEngine extends base.ModelProxyEngine.BaseEngine {
        constructor();
        proxy(instance: IInterfaceModel, options: IExecute): Promise<any>;
    }
}