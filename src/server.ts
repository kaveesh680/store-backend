import express, {Application} from 'express';
import mongoose from "mongoose";
import dotenv from "dotenv";
import {json} from 'body-parser';

const app: Application = express();
app.use(json());
dotenv.config();


const databaseURL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/store?retryWrites=true&w=majority`;
mongoose.connect(databaseURL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log("connected to database");
})

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})