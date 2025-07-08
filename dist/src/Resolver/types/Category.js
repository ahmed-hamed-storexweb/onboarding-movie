"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kernel_1 = require("@storexweb/kernel");
class CategoryType extends kernel_1.TypeResolver {
    constructor() {
        super(...arguments);
        this.provide = ["__resolveReference"];
    }
    __resolveReference(_args, ref) {
        console.log("ref", ref.id);
        return this.getRepository("category").findCategoryById(ref.id);
    }
}
exports.default = CategoryType;
//# sourceMappingURL=Category.js.map