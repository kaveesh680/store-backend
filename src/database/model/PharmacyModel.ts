import {model} from 'mongoose';
import {IProductModel, ProductSchema} from "../schemas/ProductSchema";

export const PharmacyModel = model<IProductModel>("pharmacies", ProductSchema);

