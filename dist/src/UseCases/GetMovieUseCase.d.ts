import { LogicComponent } from "@storexweb/kernel";
import { IMovie } from '../Interface/movie.interface';
export default class GetMovieUseCase extends LogicComponent {
    private movieRepository;
    execute(id: string): Promise<IMovie>;
}
