import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv'
import Express from 'express'
import router from "./routes.js"

dotenv.config();

export default class Server {
    static APP_PORT = process.env.APP_PORT;
    static DB_URL = process.env.DB_URL;
    static DB_NAME = process.env.DB_NAME;

    static config(){
        const app = new Express()
        app.use(bodyParser.urlencoded({extended: false}));
        app.use(bodyParser.json());
        app.use(cors({origin: true}))
        app.use('/', router)

        return app;

    }
}