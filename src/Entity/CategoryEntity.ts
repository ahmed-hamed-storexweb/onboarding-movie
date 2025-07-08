import {BaseEntity, IEntityOptions, Schema} from '@storexweb/kernel'

const categorySchema = new Schema({
    name : {
        type: String,
        required: true,
    }
})

export default class CategoryEntity extends BaseEntity {
    schema : Schema = categorySchema;
    options: IEntityOptions = {
        createdAtKey: "createdAt",
        updatedAtKey: "updatedAt",    
    }
}