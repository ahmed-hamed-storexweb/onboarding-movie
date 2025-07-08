import { LogicComponent } from "@storexweb/kernel";
import { ICategory, ICategoryInput } from "Interface/category.interface";
export default class CreateCategoryUseCase extends LogicComponent {
    private categoryRepository;
    execute(input: ICategoryInput): Promise<ICategory>;
}
