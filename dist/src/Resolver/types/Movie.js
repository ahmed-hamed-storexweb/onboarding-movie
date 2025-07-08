"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const kernel_1 = require("@storexweb/kernel");
class CategoryType extends kernel_1.TypeResolver {
    constructor() {
        super(...arguments);
        this.provide = ["category"];
    }
    category(_args, parent) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getRepository("category").findCategoryById(parent.category);
        });
    }
}
exports.default = CategoryType;
//# sourceMappingURL=Movie.js.map