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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const kernel_1 = require("@storexweb/kernel");
const filesAction_1 = __importDefault(require("../Actions/filesAction"));
const file_helpers_1 = require("../Helpers/file.helpers");
class CreateMovieUseCase extends kernel_1.LogicComponent {
    constructor() {
        super(...arguments);
        this.movieRepository = this.getRepository("movie");
        this.fileActions = new filesAction_1.default(this.context);
    }
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, file_helpers_1.handlePoster)(input.poster, this.fileActions);
            return this.movieRepository.createMovie(input);
        });
    }
}
exports.default = CreateMovieUseCase;
//# sourceMappingURL=CreateMovieUseCase.js.map