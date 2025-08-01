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
const CreateCategoryUseCase_1 = __importDefault(require("../../../UseCases/CreateCategoryUseCase"));
const createCategoryValidations_1 = __importDefault(require("../../../Validators/Category/createCategoryValidations"));
class CreateCategory extends kernel_1.MutationResolver {
    constructor() {
        super(...arguments);
        this.createCategoryUseCase = new CreateCategoryUseCase_1.default(this.context);
    }
    validate(input) {
        return this.applyValidation(createCategoryValidations_1.default, input);
    }
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.createCategoryUseCase.execute(input);
        });
    }
}
exports.default = CreateCategory;
//# sourceMappingURL=CreateCategory.js.map