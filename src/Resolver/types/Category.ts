import { ISchemaID, TypeResolver } from "@storexweb/kernel";
import CategoryRepository from "Repository/CategoryRepository";

export default class CategoryType extends TypeResolver {
    provide: string[] = ["__resolveReference"];

    __resolveReference(_args: any, ref: { id: string | ISchemaID }) {
      console.log("ref", ref.id)
    return this.getRepository<CategoryRepository>("category").findCategoryById(ref.id);
  }

}