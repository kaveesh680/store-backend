import {mergeResolvers} from "graphql-tools";
import {OrderResolver} from "./OrderResolver";
import {UserResolver} from './UserResolver'

export const RootResolver = mergeResolvers([OrderResolver, UserResolver]);
