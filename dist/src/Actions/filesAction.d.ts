import { LogicComponent } from "@storexweb/kernel";
import { ICreateFileActionArgs, IFileDetails, ISaveFilesActions } from "../Interface/files.interface";
export default class FilesActions extends LogicComponent {
    private get fileServiceCaller();
    saveFiles(actions: Omit<ISaveFilesActions, "keys"> & {
        keys: string;
    }): Promise<IFileDetails>;
    saveFiles(actions: Omit<ISaveFilesActions, "keys"> & {
        keys: string[];
    }): Promise<IFileDetails[]>;
    createFile(args: ICreateFileActionArgs): Promise<{
        result?: any;
        status?: boolean;
        message: string;
    }>;
    deleteFiles(keys: string | string[]): Promise<any>;
}
