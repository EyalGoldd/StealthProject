import { Application } from 'express';
import {QuestionService} from "../service";

export class QuestionController {
    private questionService: QuestionService;

    constructor(private app: Application) {
        this.questionService = new QuestionService();
        this.routes();
    }

    public routes() {
        this.app.route('/questions/startQuestionnaire').get(this.questionService.startQuestionnaire);
        this.app.route('/questions/:quizId/:questionId').get(this.questionService.getById);
        this.app.route('/questions/:quizId/:questionId').post(this.questionService.submitAnswer);
        this.app.route('/questions/:quizId/result').get(this.questionService.getScore);
    }
}