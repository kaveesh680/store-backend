import {mergeResolvers} from "graphql-tools";
import {OrderResolver} from "./OrderResolver";
import {ProductResolver} from './ProductResolver';
import {UserResolver} from './UserResolver'

export const RootResolver = mergeResolvers([OrderResolver, UserResolver, ProductResolver]);
