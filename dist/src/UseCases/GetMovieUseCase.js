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
class GetMovieUseCase extends kernel_1.LogicComponent {
    constructor() {
        super(...arguments);
        this.movieRepository = this.getRepository("movie");
    }
    execute(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("id1", id);
            return yield this.movieRepository.findMovieById(id);
        });
    }
}
exports.default = GetMovieUseCase;
//# sourceMappingURL=GetMovieUseCase.js.map