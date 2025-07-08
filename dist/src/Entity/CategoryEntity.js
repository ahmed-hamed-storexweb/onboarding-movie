"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kernel_1 = require("@storexweb/kernel");
const categorySchema = new kernel_1.Schema({
    name: {
        type: String,
        required: true,
    }
});
class CategoryEntity extends kernel_1.BaseEntity {
    constructor() {
        super(...arguments);
        this.schema = categorySchema;
        this.options = {
            createdAtKey: "createdAt",
            updatedAtKey: "updatedAt",
        };
    }
}
exports.default = CategoryEntity;
//# sourceMappingURL=CategoryEntity.js.map