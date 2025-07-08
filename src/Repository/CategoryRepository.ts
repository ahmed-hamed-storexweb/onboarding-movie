import { BaseRepository, ISchemaID } from "@storexweb/kernel";
import { ICategory, ICategoryInput } from "Interface/category.interface";

export default class CategoryRepository extends BaseRepository {
    createCategory(input : ICategoryInput): Promise<ICategory> {
        return this.create(input);
    }
     findCategoryById<ICategory>(id: string | ISchemaID): Promise<ICategory> {
        return this.findOneById(id);
    }
}
