import { ISchemaID } from "@storexweb/kernel";
export interface IBaseMovie {
    title: string;
    category: ISchemaID;
    poster?: string;
}
export interface IMovie extends IBaseMovie {
    id: ISchemaID;
}
export interface IMovieInput extends IBaseMovie {
}
