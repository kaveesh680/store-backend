import express, {Application} from 'express';
import dotenv from "dotenv";
import {connectDatabase} from './database/connection';
import {ApolloServer} from 'apollo-server-express';
import {rootTypeDefs} from './graphql/type-defs/RootTypeDefs';
import {RootResolver} from './graphql/resolvers/RootResolver';
import cors from "cors";
import { getUser } from './jwt';
import { FoodModel } from './database/model/FoodModel';
import {v4 as uuidv4} from 'uuid'

dotenv.config();
const app: Application = express();
app.use(express.json());
app.use(cors());

const server = new ApolloServer({
    typeDefs: rootTypeDefs,
    resolvers: RootResolver,
    context: ({req}) => {
        const token = req.headers.authorization || '';
        if (token) {
            const user = getUser(token);
            return user;
        }
    }
});
connectDatabase().then(() => {
    server.start().then(() => {
        server.applyMiddleware({app, path: "/graphql"});
        app.listen({port: process.env.PORT}, () => {
            console.log(`Apollo Server on http://localhost:${process.env.PORT}/graphql`);
        });
    })
}).catch(() => {
    console.log("Server error");
});