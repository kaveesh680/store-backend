import {Document, model} from "mongoose";
import {OrderSchema} from "../schemas/OrderSchema";

export interface IOrder {
  user_id: string
  order_items: {
    product: {
      _id: string
      name: string
      image: string
      current_price: number
      old_price: number | null
      key: string
    },
    quantity: number
  }[]
  date: string
  discount: number
  sub_total: string
  payment_method: string
  status: boolean
  instruction: string
  delivery: {
    full_name: string
    address: string
    city: string
    postal_code: number
    country: string
    email: string
    contact_number: string
  }
  shipping: {
    billing_address: string
    name: string
    city: string
    postal_code: number
    country: string
    contact_number: string
  }
}

export interface IOrderModel extends IOrder, Document {
}

export const OrderModel = model<IOrderModel>("orders", OrderSchema);
