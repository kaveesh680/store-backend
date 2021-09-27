import {gql} from "apollo-server-express"

export const OrderTypeDefs = gql`
    type Query{
        allPendingOrders:[Order]
        allCompletedOrders:[Order]
        userPendingOrders:[Order]
        userCompletedOrders:[Order]
    }

    type Mutation{
        setOrderDelivered(order_id:ID!):Order!
        deleteCompletedOrder(order_id:ID!):Order!
        createOrder(order:CreateOrder!):Order!
    }
    type Order{
        _id: String!
        user_id: ID!
        date: String!
        discount: Int!
        sub_total: Int!
        payment_method: String!
        status: Boolean!
        order_items: [OrderItem!]!
        instructions:String
        delivery: Delivery
        shipping: Shipping
    }
    type OrderItem{
        product:[Product]!
        quantity:Int!
    }
    type Product{
        _id:ID!
        name:String!
        image:String!
        current_Price:Int!
        old_price:Int
        key:String!
    }
    type Delivery{
        address: String!
        full_name: String
        city: String!
        country: String!
        postal_code: Int!
        email: String!
        contact_number: String!
    }
    type Shipping{
        address: String!
        full_name: String
        city: String!
        country: String!
        postal_code: Int!
        contact_number: String!
    }
    input CreateOrder{
        date: String!
        discount: Int!
        sub_total: Int!
        payment_method: String!
        order_items: [CreateOrderItem!]!
        instructions: String
        delivery: CreateDelivery!
        shipping: CreateShipping
    }

    input CreateOrderItem{
        product:[CreateOrderProduct]!
        quantity:Int!
    }
    input CreateOrderProduct{
        _id:ID!
        name:String!
        image:String!
        current_Price:Int!
        old_price:Int
        key:String!
    }
    input CreateDelivery{
        address: String!
        full_name: String
        city: String!
        country: String!
        postal_code: Int!
        email: String!
        contact_number: String!
    }
    input CreateShipping{
        address: String!
        full_name: String
        city: String!
        country: String!
        postal_code: Int!
        contact_number: String!
    }
`;
