import {Document, Schema, SchemaTypes} from 'mongoose'

export interface IProduct {
    name: string
    image: string
    currentPrice: number
    oldPrice: number | null
    key: string
}

export interface IProductModel extends IProduct, Document {
}

export const ProductSchema = new Schema({
    _id: {
        type: SchemaTypes.String,
        required: true
    },
    name: {
        type: SchemaTypes.String,
        required: true
    },
    image: {
        type: SchemaTypes.String,
        required: true
    },
    currentPrice: {
        type: SchemaTypes.Number,
        required: true
    },
    oldPrice: {
        type: SchemaTypes.Number,
        required: false
    },
    key: {
        type: SchemaTypes.String,
        required: true
    }
});