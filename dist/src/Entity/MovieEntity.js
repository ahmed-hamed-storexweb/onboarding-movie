"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kernel_1 = require("@storexweb/kernel");
const movieSchema = new kernel_1.Schema({
    title: {
        type: String,
        required: true,
    },
    category: {
        type: kernel_1.Schema.Types.ObjectId,
        required: true
    },
    poster: {
        type: String,
        required: false
    }
});
class MovieEntity extends kernel_1.BaseEntity {
    constructor() {
        super(...arguments);
        this.schema = movieSchema;
        this.options = {
            createdAtKey: "createdAt",
            updatedAtKey: "updatedAt",
        };
    }
}
exports.default = MovieEntity;
//# sourceMappingURL=MovieEntity.js.map