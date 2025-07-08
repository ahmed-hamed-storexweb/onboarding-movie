export default `
    type Category @key(fields: "id"){
        id : ID!
        name : String!
    }
    extend type Mutation {
        createCategory(name: String!) : Category!
    }
`
