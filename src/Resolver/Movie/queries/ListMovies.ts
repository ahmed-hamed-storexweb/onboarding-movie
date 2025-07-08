import { QueryResolver } from "@storexweb/kernel";
import ListMoviesUseCase from "../../../UseCases/ListMoviesUseCase";

export default class ListMovies extends QueryResolver {
  private readonly listMoviesUseCase = new ListMoviesUseCase(this.context);
   execute() {
    return this.listMoviesUseCase.execute()
  }
}