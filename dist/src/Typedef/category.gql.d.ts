declare const _default: "\n    type Category @key(fields: \"id\"){\n        id : ID!\n        name : String!\n    }\n    extend type Mutation {\n        createCategory(name: String!) : Category!\n    }\n";
export default _default;
