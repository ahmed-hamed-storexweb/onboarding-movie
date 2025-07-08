"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const kernel_1 = require("@storexweb/kernel");
class FilesActions extends kernel_1.LogicComponent {
    // Calling the service "files" in the env file
    get fileServiceCaller() {
        return this.serviceCaller("files");
    }
    saveFiles(args) {
        return __awaiter(this, void 0, void 0, function* () {
            const file = yield this.fileServiceCaller.call("saveFile", args);
            return file.status ? file.result : null;
        });
    }
}
exports.default = FilesActions;
//# sourceMappingURL=filesAction.js.map