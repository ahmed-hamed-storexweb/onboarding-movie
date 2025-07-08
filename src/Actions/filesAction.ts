import { LogicComponent } from "@storexweb/kernel";
import {
  ICreateFileActionArgs,
  IFileDetails,
  ISaveFilesActions,
} from "../Interface/files.interface";

export default class FilesActions extends LogicComponent {
  private get fileServiceCaller() {
    return this.serviceCaller("files");
  }

  saveFiles(
    actions: Omit<ISaveFilesActions, "keys"> & { keys: string }
  ): Promise<IFileDetails>;
  saveFiles(
    actions: Omit<ISaveFilesActions, "keys"> & { keys: string[] }
  ): Promise<IFileDetails[]>;
  async saveFiles(
    args: ISaveFilesActions
  ): Promise<IFileDetails | IFileDetails[]> {
    const file = await this.fileServiceCaller.call("saveFile", args);
    return file.status ? file.result : null;
  }

  async createFile(
    args: ICreateFileActionArgs
  ): Promise<{ result?: any; status?: boolean; message: string }> {
    const file = await this.fileServiceCaller.call("createFile", args);
    return file;
  }

  async deleteFiles(keys: string | string[]) {
    const result = await this.fileServiceCaller.call("deleteFile", { keys });
    return result;
  }

}
