import { Application } from 'express';
import {QuestionService} from "../service/QuestionService";

export class QuestionController {
    private questionService: QuestionService;

    constructor(private app: Application) {
        this.questionService = new QuestionService();
        this.routes();
    }

    public routes() {
        this.app.route('/').get();
    }
}