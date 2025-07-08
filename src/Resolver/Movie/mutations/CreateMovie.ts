import { IFieldValidationError, MutationResolver } from "@storexweb/kernel";
import { IMovie, IMovieInput } from "Interface/movie.interface";
import CreateMovieUseCase from "../../../UseCases/CreateMovieUseCase";
import createMovieValidations from "../../../Validators/Movie/createMovieValidations";

export default class CreateMovie extends MutationResolver {
  private readonly createMovieUseCase = new CreateMovieUseCase(this.context);
  validate(input : IMovieInput):  Promise<IFieldValidationError[]> | IFieldValidationError[] {
    return this.applyValidation(createMovieValidations, input);
  }
   execute(input : IMovieInput) : Promise<IMovie> {
    return this.createMovieUseCase.execute(input)
  }
}