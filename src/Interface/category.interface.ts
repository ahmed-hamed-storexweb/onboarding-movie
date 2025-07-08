import { ISchemaID } from "@storexweb/kernel"

export interface IBaseCategory {
    name : string
}

export interface ICategory extends IBaseCategory {
    id : ISchemaID
}

export interface ICategoryInput extends IBaseCategory {}
