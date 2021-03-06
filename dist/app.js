"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importStar(require("express"));
const express_graphql_1 = require("express-graphql");
const typeorm_1 = require("typeorm");
const body_parser_1 = require("body-parser");
const schema_1 = require("./graphQl/schema");
const resolver_1 = require("./graphQl/resolver");
const app = express_1.default();
app.use(body_parser_1.json());
// creating database connection
typeorm_1.createConnection().then(async (connection) => {
    console.log("Connected to database");
    app.use('/graphql', express_graphql_1.graphqlHTTP({
        schema: schema_1.querySchema,
        rootValue: resolver_1.queryResolver,
        graphiql: true,
        context: {
            req: express_1.request,
            res: express_1.response
        }
    }));
    app.listen(3000);
}).catch(error => console.log(error));
