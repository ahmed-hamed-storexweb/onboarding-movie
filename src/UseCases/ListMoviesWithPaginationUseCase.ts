import { LogicComponent, ResponseWithPagination } from "@storexweb/kernel";
import {IMovie, IMovieInput} from '../Interface/movie.interface'
import MovieRepository from "Repository/MovieRepository";
import { movieFilters } from "../Filter/movieFilters";

export default class ListMoviesWithPaginationUseCase extends LogicComponent {
    private movieRepository =  this.getRepository<MovieRepository>("movie");

    async execute() {
        const movies = await ResponseWithPagination.createListingResponse(this.movieRepository, movieFilters,{});
        return movies;
    }
}