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
const movieFilters_1 = require("../Filter/movieFilters");
class ListMoviesUseCase extends kernel_1.LogicComponent {
    constructor() {
        super(...arguments);
        this.movieRepository = this.getRepository("movie");
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            // return ResponseWithPagination.createListingResponse(this.movieRepository, movieFilters,{});
            const movies = yield this.movieRepository.list(movieFilters_1.movieFilters, {});
            console.log(movies);
            return movies;
        });
    }
}
exports.default = ListMoviesUseCase;
//# sourceMappingURL=ListMoviesUseCase.js.map