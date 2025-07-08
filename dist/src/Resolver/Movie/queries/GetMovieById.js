"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const kernel_1 = require("@storexweb/kernel");
const GetMovieUseCase_1 = __importDefault(require("../../../UseCases/GetMovieUseCase"));
class GetMovieById extends kernel_1.QueryResolver {
    constructor() {
        super(...arguments);
        this.getMovieUseCase = new GetMovieUseCase_1.default(this.context);
    }
    validate({ id }) {
        console.log("validate, ", id);
    }
    execute({ id }) {
        return this.getMovieUseCase.execute(id);
    }
}
exports.default = GetMovieById;
//# sourceMappingURL=GetMovieById.js.map