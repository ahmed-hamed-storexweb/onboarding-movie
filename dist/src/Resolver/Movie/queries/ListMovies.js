"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const kernel_1 = require("@storexweb/kernel");
const ListMoviesUseCase_1 = __importDefault(require("../../../UseCases/ListMoviesUseCase"));
class ListMovies extends kernel_1.QueryResolver {
    constructor() {
        super(...arguments);
        this.listMoviesUseCase = new ListMoviesUseCase_1.default(this.context);
    }
    execute() {
        return this.listMoviesUseCase.execute();
    }
}
exports.default = ListMovies;
//# sourceMappingURL=ListMovies.js.map