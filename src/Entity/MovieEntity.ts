import {BaseEntity, IEntityOptions, Schema} from '@storexweb/kernel'

const movieSchema = new Schema({
    title : {
        type: String,
        required: true,
    },
    category : {
        type: Schema.Types.ObjectId,
        required: true
    },
    poster : {
        type: String,
        required:false
    }
})

export default class MovieEntity extends BaseEntity {
    schema : Schema = movieSchema;
    options: IEntityOptions = {
        createdAtKey: "createdAt",
        updatedAtKey: "updatedAt",    
    }
}