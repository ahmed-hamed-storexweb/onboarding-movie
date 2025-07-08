"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const categoryValidation = ({ isPartial }) => {
    const validations = {
        name: {
            isEmpty: false,
        },
    };
    return validations;
};
const categoryValidationSchema = categoryValidation({ isPartial: true });
exports.default = Object.assign({}, categoryValidationSchema);
//# sourceMappingURL=createCategoryValidations.js.map