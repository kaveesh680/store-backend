import {Schema, SchemaTypes} from "mongoose";
import {DeliverySchema} from "./DeliverySchema";
import {OrderItemSchema} from "./OrderItemSchema";
import {ShippingSchema} from "./ShippingSchema";

export const OrderSchema = new Schema({
    _id: {
        type: SchemaTypes.String,
        required: true
    },
    user_id: {
        type: SchemaTypes.String,
        required: true
    },
    order_items: {
        type: [OrderItemSchema],
        required: true
    },
    date: {
        type: SchemaTypes.String,
        required: true
    },
    discount: {
        type: SchemaTypes.Number,
        required: true
    },
    sub_total: {
        type: SchemaTypes.Number,
        required: true
    },
    status: {
        type: SchemaTypes.Boolean,
        required: true
    },
    payment_method: {
        type: SchemaTypes.String,
        required: true
    },
    delivery: {
        type: DeliverySchema,
        required: true
    },
    shipping: {
        type: ShippingSchema,
        required: false
    },
    instruction: {
        type: SchemaTypes.String,
        required: false
    }
});