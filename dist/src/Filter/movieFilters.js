"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movieFilters = void 0;
const kernel_1 = require("@storexweb/kernel");
exports.movieFilters = {
    title: {
        field: "title",
        options: [kernel_1.EFilterOptions.LIKE, kernel_1.EFilterOptions.IS],
    },
    category: {
        field: "category",
        options: [kernel_1.EFilterOptions.LIKE, kernel_1.EFilterOptions.IS],
        provide: {
            entity: "category",
            match: "name",
            field: "_id"
        }
    }
};
//# sourceMappingURL=movieFilters.js.map