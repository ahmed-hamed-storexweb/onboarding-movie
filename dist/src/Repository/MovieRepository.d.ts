import { BaseRepository, ISchemaID } from "@storexweb/kernel";
import { IMovie, IMovieInput } from "../Interface/movie.interface";
export default class MovieRepository extends BaseRepository {
    findMovieById<IMovie>(id: string | ISchemaID): Promise<IMovie>;
    createMovie(input: IMovieInput): Promise<IMovie>;
}
