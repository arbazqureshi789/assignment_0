import "reflect-metadata";
import express, { request, response } from 'express';
import { graphqlHTTP } from 'express-graphql';
import { createConnection } from "typeorm";
import { Email } from "./entity/User";
import { json } from 'body-parser';
import cron from 'node-cron';

import { querySchema } from './graphQl/schema';
import { queryResolver } from './graphQl/resolver';

const app = express();
app.use(json());

// creating database connection
createConnection().then(async connection => {

    console.log("Connected to database");
    app.use('/graphql', graphqlHTTP({
        schema: querySchema,
        rootValue: queryResolver,
        graphiql: true,
        context: {
            req: request,
            res: response
        }

    }));

    app.listen(3000);

}).catch(error => console.log(error));
