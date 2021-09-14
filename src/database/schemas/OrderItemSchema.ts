import {Schema, SchemaTypes} from "mongoose";
import {ProductSchema} from "./ProductSchema";

export const OrderItemSchema = new Schema({
    product: {
        type: ProductSchema,
        required: true
    },
    quantity: {
        type: SchemaTypes.Number,
        required: true
    }
});