import { ISchemaID, TypeResolver } from "@storexweb/kernel";
import { IMovie } from "Interface/movie.interface";
import CategoryRepository from "Repository/CategoryRepository";

export default class CategoryType extends TypeResolver {
    provide: string[] = ["category"];

    async category(_args : any, parent : IMovie) {
        return await this.getRepository<CategoryRepository>("category").findCategoryById(parent.category)
    }

}