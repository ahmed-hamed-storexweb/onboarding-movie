import { LogicComponent } from "@storexweb/kernel";
import {IMovie, IMovieInput} from '../Interface/movie.interface'
import MovieRepository from "Repository/MovieRepository";
import FilesActions  from "../Actions/filesAction";
import { handlePoster } from "../Helpers/file.helpers";

export default class CreateMovieUseCase extends LogicComponent {
    private movieRepository =  this.getRepository<MovieRepository>("movie");
    private fileActions = new FilesActions(this.context)
    async execute(input : IMovieInput) : Promise<IMovie> {
        await handlePoster(input.poster, this.fileActions)
        return this.movieRepository.createMovie(input)
    }
}