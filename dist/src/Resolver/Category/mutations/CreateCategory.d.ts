import { IFieldValidationError, MutationResolver } from "@storexweb/kernel";
import { ICategoryInput } from "Interface/category.interface";
export default class CreateCategory extends MutationResolver {
    private readonly createCategoryUseCase;
    validate(input: ICategoryInput): Promise<IFieldValidationError[]> | IFieldValidationError[];
    execute(input: ICategoryInput): Promise<import("Interface/category.interface").ICategory>;
}
