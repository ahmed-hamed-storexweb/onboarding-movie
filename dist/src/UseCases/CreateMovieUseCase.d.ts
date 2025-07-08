import { LogicComponent } from "@storexweb/kernel";
import { IMovie, IMovieInput } from '../Interface/movie.interface';
export default class CreateMovieUseCase extends LogicComponent {
    private movieRepository;
    private fileActions;
    execute(input: IMovieInput): Promise<IMovie>;
}
