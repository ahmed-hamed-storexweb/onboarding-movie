
const categoryValidation = ({isPartial} : {isPartial : boolean}) => {
    const validations = {
        name : {
            isEmpty : false,
        },
    }
    return validations;
}
const categoryValidationSchema =  categoryValidation({isPartial : true});
export default {
    ...categoryValidationSchema,
}