import { QueryResolver } from "@storexweb/kernel";
export default class ListMovies extends QueryResolver {
    private readonly listMoviesWithPaginationUseCase;
    execute(): Promise<import("@storexweb/kernel").ResponseWithPagination>;
}
