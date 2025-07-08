
const movieValidation = ({isPartial} : {isPartial : boolean}) => {
    const validations = {
        title : {
            isEmpty : false
        },
        category : {
            isEmpty : false,
            isMongoId : true,
            // exists: "category:_id" // todo
            // exists: "service_name:entity_name:field"
        }
    }
    return validations;
}
const movieValidationSchema =  movieValidation({isPartial : true});
export default {
    ...movieValidationSchema,
}
