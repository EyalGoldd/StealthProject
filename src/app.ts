import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { QuestionController } from './controller/QuestionController';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import { MONGO_URL } from './constants';

class App {
    public app: Application;
    public questionController: QuestionController;

    constructor() {
        this.app = express();
        this.setConfig();
        this.setMongoConfig();

        this.questionController = new QuestionController(this.app);
    }

    private setConfig() {
        this.app.use(bodyParser.json({ limit: '50mb' }));
        this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
        this.app.use(cors());
        this.app.use(cookieParser());
    }

    private setMongoConfig() {
        mongoose.connect(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    }
}

export default new App().app; 