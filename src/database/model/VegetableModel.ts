import {model} from 'mongoose';
import {IProductModel, ProductSchema} from "../schemas/ProductSchema";

export const VegetableModel = model<IProductModel>("vegetables", ProductSchema);
