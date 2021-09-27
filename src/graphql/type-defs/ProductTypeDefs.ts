import {gql} from 'apollo-server-express'

export const ProductTypeDefs = gql`
    type Query{
        getFoodProducts:Category!
        getElectronicProducts:Category!
        getFruitProducts:Category!
        getMeatProducts:Category!
        getPharmacyproducts:Category!
        getVegetableProducts:Category!
    }

    type Mutation {
        addProduct(name:String!, image:String!, current_price:Int!,old_price:Int,key:String!, category:String!):Product!
        updateProduct(_id:ID!,name:String!, image:String!, current_price:Int!,old_price:Int,key:String!, category:String!):Product!
        deleteProduct(_id:ID!, category:String!):Product!
    }

    type Category{
        category:String!
        products:[Product!]!
    }

    type Product{
        _id:ID!
        name:String!
        image:String!
        current_price:Int!
        old_price:Int
        key:String!
    }
`;

