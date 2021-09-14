import { Schema, SchemaTypes } from "mongoose";

export const ShippingSchema = new Schema({
    name:{
        type:SchemaTypes.String,
        required:true
    },
    billing_address:{
        type:SchemaTypes.String,
        required: true
    },
    city:{
        type:SchemaTypes.String,
        required:true
    },
    postal_code:{
        type:SchemaTypes.Number,
        required:true
    },
    country:{
        type:SchemaTypes.String,
        required:true
    },
    contact_number:{
        type:SchemaTypes.Number,
        required:true
    }
});