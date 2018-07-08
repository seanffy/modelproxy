import { DefaultProps } from "fx-schema-form-react/libs/components";
import { SchemaFormProps } from "fx-schema-form-react/libs/libs/dec";
import { Map } from "immutable";
import { RouteComponentProps } from "react-router";

import { mainReducerKey } from "../constants";

export interface IProps extends SchemaFormProps, DefaultProps, RouteComponentProps<any, any> {
    title?: string;
    confirmData?: Map<string, any>;
    toggleConfirm?: (confirm: boolean) => void;
    saveData?: (data: any) => void;
    backToProject?: () => void;
}

export const reducerKey = "create";
export const reducerKeys = ["modules", mainReducerKey, reducerKey];
export const proxySettings = {
    project: {
        ns: "test",
        key: "project"
    }
};