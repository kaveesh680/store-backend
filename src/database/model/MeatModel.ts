import {model} from 'mongoose';
import {IProductModel, ProductSchema} from "../schemas/ProductSchema";

export const MeatModel = model<IProductModel>("meats", ProductSchema);

