import { QueryResolver } from "@storexweb/kernel";
import { IMovie } from "Interface/movie.interface";
export default class GetMovieById extends QueryResolver {
    private readonly getMovieUseCase;
    validate({ id }: {
        id: string;
    }): void;
    execute({ id }: {
        id: string;
    }): Promise<IMovie>;
}
