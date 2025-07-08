import { ISchemaID, TypeResolver } from "@storexweb/kernel";
export default class CategoryType extends TypeResolver {
    provide: string[];
    __resolveReference(_args: any, ref: {
        id: string | ISchemaID;
    }): Promise<unknown>;
}
