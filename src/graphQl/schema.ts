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
        register(email:String!):RegisteredUser!
        allRegisteredEmail:[RegisteredUser]!
    }
`);