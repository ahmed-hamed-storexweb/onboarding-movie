"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const movieValidation = ({ isPartial }) => {
    const validations = {
        title: {
            isEmpty: false
        },
        category: {
            isEmpty: false,
            isMongoId: true,
            // exists: "category:_id" // todo
            // exists: "service_name:entity_name:field"
        }
    };
    return validations;
};
const movieValidationSchema = movieValidation({ isPartial: true });
exports.default = Object.assign({}, movieValidationSchema);
//# sourceMappingURL=createMovieValidations.js.map