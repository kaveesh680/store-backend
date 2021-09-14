import {model} from 'mongoose';
import {IProductModel, ProductSchema} from "../schemas/ProductSchema";

export const FoodModel = model<IProductModel>("foods", ProductSchema);

