"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kernel_1 = require("@storexweb/kernel");
class CategoryRepository extends kernel_1.BaseRepository {
    createCategory(input) {
        return this.create(input);
    }
    findCategoryById(id) {
        return this.findOneById(id);
    }
}
exports.default = CategoryRepository;
//# sourceMappingURL=CategoryRepository.js.map