"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const kernel_1 = require("@storexweb/kernel");
const ListMoviesWithPaginationUseCase_1 = __importDefault(require("../../../UseCases/ListMoviesWithPaginationUseCase"));
class ListMovies extends kernel_1.QueryResolver {
    constructor() {
        super(...arguments);
        this.listMoviesWithPaginationUseCase = new ListMoviesWithPaginationUseCase_1.default(this.context);
    }
    execute() {
        return this.listMoviesWithPaginationUseCase.execute();
    }
}
exports.default = ListMovies;
//# sourceMappingURL=ListMoviesWithPagination.js.map