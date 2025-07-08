import { LogicComponent, ResponseWithPagination } from "@storexweb/kernel";
export default class ListMoviesWithPaginationUseCase extends LogicComponent {
    private movieRepository;
    execute(): Promise<ResponseWithPagination>;
}
