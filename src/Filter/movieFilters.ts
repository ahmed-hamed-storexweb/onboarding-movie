import { EFilterOptions, IFilterDef } from "@storexweb/kernel"
import MovieRepository from "Repository/MovieRepository"

export const movieFilters : IFilterDef  = {
    title : {
        field : "title",
        options: [EFilterOptions.LIKE, EFilterOptions.IS],
        
    },
    category : {
        field:"category",
        options: [EFilterOptions.LIKE, EFilterOptions.IS],
        provide:{
            entity:"category",
            match:"name",
            field:"_id"
        }
    }
}