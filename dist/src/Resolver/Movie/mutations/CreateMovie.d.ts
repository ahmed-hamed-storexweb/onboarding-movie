import { IFieldValidationError, MutationResolver } from "@storexweb/kernel";
import { IMovie, IMovieInput } from "Interface/movie.interface";
export default class CreateMovie extends MutationResolver {
    private readonly createMovieUseCase;
    validate(input: IMovieInput): Promise<IFieldValidationError[]> | IFieldValidationError[];
    execute(input: IMovieInput): Promise<IMovie>;
}
