import { TypeResolver } from "@storexweb/kernel";
import { IMovie } from "Interface/movie.interface";
export default class CategoryType extends TypeResolver {
    provide: string[];
    category(_args: any, parent: IMovie): Promise<unknown>;
}
