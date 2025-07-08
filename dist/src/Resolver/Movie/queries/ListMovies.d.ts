import { QueryResolver } from "@storexweb/kernel";
export default class ListMovies extends QueryResolver {
    private readonly listMoviesUseCase;
    execute(): Promise<unknown[]>;
}
