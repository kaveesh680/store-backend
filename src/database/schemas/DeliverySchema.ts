import { Schema, SchemaTypes } from "mongoose";

export const DeliverySchema = new Schema({
    full_name:{
        type:SchemaTypes.String,
        required:true
    },
    address:{
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
    },
    email:{
        type:SchemaTypes.String,
        required:true
    }

});