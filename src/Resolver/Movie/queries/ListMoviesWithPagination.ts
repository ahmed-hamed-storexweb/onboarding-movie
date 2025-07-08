import { QueryResolver } from "@storexweb/kernel";
import ListMoviesWithPaginationUseCase from "../../../UseCases/ListMoviesWithPaginationUseCase";

export default class ListMovies extends QueryResolver {
  private readonly listMoviesWithPaginationUseCase = new ListMoviesWithPaginationUseCase(this.context);
   execute() {
    return this.listMoviesWithPaginationUseCase.execute()
  }
}