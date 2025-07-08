import { BaseRepository, ISchemaID } from "@storexweb/kernel";
import { ICategory, ICategoryInput } from "Interface/category.interface";
export default class CategoryRepository extends BaseRepository {
    createCategory(input: ICategoryInput): Promise<ICategory>;
    findCategoryById<ICategory>(id: string | ISchemaID): Promise<ICategory>;
}
