import { LogicComponent } from "@storexweb/kernel";
import { IFileDetails, ISaveFilesActions } from "../Interface/files.interface";
export default class FilesActions extends LogicComponent {
    private get fileServiceCaller();
    saveFiles(actions: Omit<ISaveFilesActions, "keys"> & {
        keys: string;
    }): Promise<IFileDetails>;
    saveFiles(actions: Omit<ISaveFilesActions, "keys"> & {
        keys: string[];
    }): Promise<IFileDetails[]>;
}
