import { QueryResolver } from "@storexweb/kernel";
import GetMovieUseCase from "../../../UseCases/GetMovieUseCase";
import { IMovie } from "Interface/movie.interface";

export default class GetMovieById extends QueryResolver {
  private readonly getMovieUseCase = new GetMovieUseCase(this.context);
  validate({id} : {id : string}){
    console.log("validate, ",id)
    
  }
   execute({id} : {id : string}) {
    return this.getMovieUseCase.execute(id)
  }
}