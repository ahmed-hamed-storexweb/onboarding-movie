"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kernel_1 = require("@storexweb/kernel");
class MovieRepository extends kernel_1.BaseRepository {
    findMovieById(id) {
        return this.findOneById(id);
    }
    createMovie(input) {
        return this.create(input);
    }
}
exports.default = MovieRepository;
//# sourceMappingURL=MovieRepository.js.map