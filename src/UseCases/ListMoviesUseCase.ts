import { LogicComponent, ResponseWithPagination } from "@storexweb/kernel";
import {IMovie, IMovieInput} from '../Interface/movie.interface'
import MovieRepository from "Repository/MovieRepository";
import { movieFilters } from "../Filter/movieFilters";

export default class ListMoviesUseCase extends LogicComponent {
    private movieRepository =  this.getRepository<MovieRepository>("movie");

    async execute() {
        // return ResponseWithPagination.createListingResponse(this.movieRepository, movieFilters,{});
        const movies = await this.movieRepository.list(movieFilters, {});
        console.log(movies);
        return movies;
    }
}