import { Request, Response, response } from "express";
import Questions, { IQuestionsSet } from "../model/Question";
import User from "../model/User";
import { MongooseDocument } from "mongoose";
import { resolve } from "url";

export class QuestionService {
    constructor() {
        this.startQuestionnaire = this.startQuestionnaire.bind(this)
    }
    public startQuestionnaire(req: Request, res: Response) {
        this.findQuestionsSet("5e0cefc45fdf068efcf96173").then(document: Document => res.json(document))
    }

    /** 
     * answerQuestion
     */
    public submitAnswer(req: Request, res: Response) {

    }

    public findQuestionsSet(id: String): Promise<any> {
        return Questions.findOne({ _id: id }, (error: Error, document: IQuestionsSet) => {
            if (document !== null) {
                User.findOneAndUpdate({ _id: 1 }, { questions: { id: [] } });
                return document;
            }
        }).catch(console.log);
    }
}