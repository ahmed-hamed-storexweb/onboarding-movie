import { LogicComponent } from "@storexweb/kernel";
import {IMovie, IMovieInput} from '../Interface/movie.interface'
import MovieRepository from "Repository/MovieRepository";

export default class GetMovieUseCase extends LogicComponent {
    private movieRepository =  this.getRepository<MovieRepository>("movie");

    async execute(id : string) : Promise<IMovie> {
        console.log("id1",id)
        return await this.movieRepository.findMovieById(id)
    }
}