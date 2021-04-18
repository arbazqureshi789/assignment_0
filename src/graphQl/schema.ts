import { buildSchema } from 'graphql';

export const querySchema = buildSchema(`

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
        registerEmail(email:String!):RegisteredUser!
        allRegisteredEmail:[RegisteredUser]!
    }

    schema {
        query: rootQueries
    }
`);