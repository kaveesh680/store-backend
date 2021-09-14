import {model} from 'mongoose';
import {IProductModel, ProductSchema} from "../schemas/ProductSchema";

export const ElectronicModel = model<IProductModel>("electronics", ProductSchema);

