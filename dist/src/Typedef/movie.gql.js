"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = `
    type Movie {
        id : ID!
        title : String!
        poster: String
        category : Category!
    }

    type MovieListingType {
        data : [Movie]
        pagination: PaginationType
    }

    extend type Mutation {
        createMovie(title : String!, poster: String, category : String!) : Movie!
    }
    extend type Query {
        getMovieById(id : ID!): Movie
        listMovies: [Movie]
        listMoviesWithPagination(listing:ListingInput):MovieListingType
    }
`;
//# sourceMappingURL=movie.gql.js.map