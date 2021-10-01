import express, {Application, Request, Response} from 'express';
import {connectDatabase} from './database/connection';
import {OrderModel} from './database/model/OrderModel';
import {v4 as uuidv4} from 'uuid';


const app: Application = express();
app.use(express.json());

connectDatabase().then(() => {
    app.post('/add/orders', async (req: Request, res: Response) => {
        const order = await OrderModel.create({
            _id:uuidv4(),
            user_id: "45311b2d-3c3d-4336-a80a-660287c76f2e",
            order_items: [{
                product: {
                    _id: "6a73892e-917f-4b37-bf58-5abd0f309b50",
                    name: "Piriton",
                    image: "piriton",
                    current_price: 60,
                    old_price: 40,
                    key: "912345678"
                },
                quantity: 5
            }, {
                product: {
                    _id: "832ee18e-cfd7-4489-9ebf-896fc495e018",
                    name: "Citrazine",
                    image: "citrazine",
                    current_price: 60,
                    old_price: 40,
                    key: "912345678"
                },
                quantity: 4
            }
            ],
            date: "june 12",
            discount: 25,
            sub_total: 125,
            payment_method: "cash",
            status: true,
            instruction: "Nothing",
            delivery: {
                full_name: "Kaveesh Charuka",
                address: "No 23 A.H.E.Fernando Mawatha, Dangedara, Galle",
                city: "Galle",
                postal_code: 80000,
                country: "Sri Lanka",
                email: "kaveeshcharuka@gmail.com",
                contact_number: "+94713381609"
            },
            shipping: {
                billing_address: "No 23 A.H.E.Fernando Mawatha, Dangedara, Galle",
                name: "kaveesh",
                city: "Galle",
                postal_code: 80000,
                country: "Sri lanka",
                contact_number: "+94713381609"
            }
        });
        res.send(order);
    });
    app.listen(3000, () => {
        console.log(`App is listen at http://localhost/3000`);
    });
}).catch((error) => {
    console.log(error);
})

// {
//     "createOrderOrder": {
//     "discount":20,
//         "sub_total":200,
//         "payment_method":"cash",
//         "order_items":[
//         {
//             "product":{         "_id":"350f84db-be84-4e8a-aa9c-4549b78f7de3",
//                 "name":"Carrot",
//                 "image":"carrot",
//                 "current_price":55,
//                 "old_price":null,
//                 "key":"123456789"
//             },
//             "quantity":3
//         },{
//             "product":{
//                 "_id":"b851a188-acd3-422c-9992-c8cb18a9afe8",
//                 "name":"Cabbage",
//                 "image":"cabbage",
//                 "current_price":35,
//                 "old_price":40,
//                 "key":"912345678"
//             },
//             "quantity":5
//         }
//     ],
//         "instruction":"Nothing",
//         "delivery":{
//         "address":"No 23 A.H.E.Fernando Mawatha, Dangedara, Galle",
//             "full_name":"kaveesh charuka",
//             "city":"Galle",
//             "country":"Sri Lanka",
//             "postal_code":80000,
//             "email":"kaveeshcharuka@gmail.com",
//             "contact_number":"+94713381609"
//     },
//     "shipping":{
//         "billing_address":"fgfgfdgf",
//             "name":"kaveesh",
//             "city":"Galle",
//             "country":"Sri Lanka",
//             "postal_code":80000,
//             "contact_number":"+9713381609"
//     }
// }
// }