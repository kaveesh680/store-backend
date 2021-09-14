import {model} from 'mongoose';
import {IProductModel, ProductSchema} from "../schemas/ProductSchema";

export const FruitModel = model<IProductModel>("fruits", ProductSchema);

