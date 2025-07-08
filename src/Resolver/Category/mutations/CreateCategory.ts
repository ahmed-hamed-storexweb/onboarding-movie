import { IFieldValidationError, MutationResolver } from "@storexweb/kernel";
import { ICategoryInput } from "Interface/category.interface";
import CreateCategoryUseCase from "../../../UseCases/CreateCategoryUseCase";
import createCategoryValidations from "../../../Validators/Category/createCategoryValidations";

export default class CreateCategory extends MutationResolver {
  private readonly createCategoryUseCase = new CreateCategoryUseCase(this.context);
  validate(input: ICategoryInput): Promise<IFieldValidationError[]> | IFieldValidationError[] {
    return this.applyValidation(createCategoryValidations, input);
  }
  async execute(input : ICategoryInput) {
    return this.createCategoryUseCase.execute(input)
  }
}