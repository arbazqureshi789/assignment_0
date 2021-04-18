"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.querySchema = void 0;
const graphql_1 = require("graphql");
exports.querySchema = graphql_1.buildSchema(`

    type RegisteredUser{
        id: String!
        email: String!
    }

    type Error{
        status: Int!
        errorMessage: String!
    }

    union User = RegisteredUser | Error

    type rootQueries{
        register(email:String!):RegisteredUser!
        allRegisteredEmail:[RegisteredUser]!
    }
`);
