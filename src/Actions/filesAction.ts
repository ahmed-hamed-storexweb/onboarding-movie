import { LogicComponent } from "@storexweb/kernel";
import {
  ICreateFileActionArgs,
  IFileDetails,
  ISaveFilesActions,
} from "../Interface/files.interface";

export default class FilesActions extends LogicComponent {

  // Calling the service "files" in the env file

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


}
