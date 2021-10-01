export interface IProduct {
  _id?: string
  name: string
  image: string
  current_price: number
  old_price: number | null | undefined
  key: string
}

export interface CreateOrderType {
  discount: number
  sub_total: number
  payment_method: string
  instruction: string
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
  delivery: {
    address: string
    full_name: string
    city: string
    country: string
    postal_code: number
    email: string
    contact_number: string
  }
  shipping: {
    address: string
    full_name: string
    city: string
    country: string
    postal_code: number
    contact_number: string
  }
}
