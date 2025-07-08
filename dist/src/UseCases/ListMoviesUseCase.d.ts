import { LogicComponent } from "@storexweb/kernel";
export default class ListMoviesUseCase extends LogicComponent {
    private movieRepository;
    execute(): Promise<unknown[]>;
}
