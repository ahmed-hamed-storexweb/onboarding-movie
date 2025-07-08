"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const kernel_1 = require("@storexweb/kernel");
const CreateMovieUseCase_1 = __importDefault(require("../../../UseCases/CreateMovieUseCase"));
const createMovieValidations_1 = __importDefault(require("../../../Validators/Movie/createMovieValidations"));
class CreateMovie extends kernel_1.MutationResolver {
    constructor() {
        super(...arguments);
        this.createMovieUseCase = new CreateMovieUseCase_1.default(this.context);
    }
    validate(input) {
        return this.applyValidation(createMovieValidations_1.default, input);
    }
    execute(input) {
        return this.createMovieUseCase.execute(input);
    }
}
exports.default = CreateMovie;
//# sourceMappingURL=CreateMovie.js.map