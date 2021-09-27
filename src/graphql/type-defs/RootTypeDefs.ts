import {mergeTypeDefs} from "graphql-tools";
import {OrderTypeDefs} from './OrderTypeDefs';
import {UserTypeDefs} from './UserTypeDefs'
import {ProductTypeDefs} from './ProductTypeDefs';

export const rootTypeDefs = mergeTypeDefs([OrderTypeDefs, UserTypeDefs, ProductTypeDefs]);