import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import routes from './routes';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());

routes(app);

mongoose.connect(process.env.MONGO_DB)
    .then(() => {
        console.log('Connect Db success!');
    }) 
    .catch((err) => {
        console.log(err);
    });

app.listen(port, () => {
    console.log('Server is running in port: ', port);
});
