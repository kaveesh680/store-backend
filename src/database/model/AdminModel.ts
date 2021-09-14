import {Document, model} from "mongoose";
import { AdminSchema } from "../schemas/AdminSchema";


export interface IAdmin {
    first_name: string
    last_name: string
    email: string
    password: string
}

export interface IAdminModel extends IAdmin, Document {
}


export const AdminModel = model<IAdminModel>("admins", AdminSchema);
