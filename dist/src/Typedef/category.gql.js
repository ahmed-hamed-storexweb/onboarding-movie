"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = `
    type Category @key(fields: "id"){
        id : ID!
        name : String!
    }
    extend type Mutation {
        createCategory(name: String!) : Category!
    }
`;
//# sourceMappingURL=category.gql.js.map