import express, {Application} from 'express';
import dotenv from "dotenv";
import {json} from 'body-parser';
import {connectDatabase} from './database/connection';
import {OrderModel} from './database/model/OrderModel';

const app: Application = express();
app.use(json());
dotenv.config();

connectDatabase().then(() => {
    OrderModel.create({
        _id: "fdfdfdf",
        user_id:"dssdsdsdsdd",
        order_items: [{
            product: {
                _id: "sdfgfg",
                name: "Iron",
                image: "Iron",
                current_price: 59,
                old_price: null,
                key:"dsdsdsd"
            },
            quantity: 5
        }],
        date: "04 july 2021",
        discount: 45,
        sub_total: 250,
        payment_method: "cash",
        status: false,
        instruction: "dsdsd",
        delivery: {
            full_name:"dsdsds",
            address:"dsdsd",
            city: "galle",
            postal_code: 23232,
            country: "sri lanka",
            email: "sdsdsds",
            contact_number: 1211121212
        },
        shipping:{
            billing_address: "sdssd",
            name: "sdsdsdsd",
            city: "galle",
            postal_code: 2323,
            country: "sdsdsd",
            contact_number: 1212121
        }
    })
});

app.listen(process.env.PORT, () => {
    console.log("Server is listening on port 3000");
})