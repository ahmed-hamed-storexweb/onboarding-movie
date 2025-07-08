/// <reference types="node" />
/// <reference types="node" />
export declare type TFileSecurity = "temp" | "secure" | "normal";
export interface ICreateFileActionArgs {
    name: string;
    path: string;
    file: Buffer;
    security: TFileSecurity;
}
export interface ISaveFilesActions {
    security?: TFileSecurity;
    path?: string;
    keys?: string | string[];
    details?: boolean;
    original?: string;
}
export interface IFileDetails {
    mimetype: string;
    name: string;
    size: number;
    extension: string;
    key: string;
}
