import { LogicComponent } from "@storexweb/kernel";
import { ICategory, ICategoryInput } from "Interface/category.interface";
import CategoryRepository from "Repository/CategoryRepository";

export default class CreateCategoryUseCase extends LogicComponent {
    private categoryRepository =  this.getRepository<CategoryRepository>("category");

    async execute(input : ICategoryInput) : Promise<ICategory> {
        console.log("cat-usecase",input);
        return this.categoryRepository.createCategory(input)
    }
}