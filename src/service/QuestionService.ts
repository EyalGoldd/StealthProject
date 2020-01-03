import { Request, Response, response } from "express";
import Questions, { IQuestionsSet } from "../model/Question";
import User from "../model/User";
import { StartQuestionnaireContract } from "../contracts/QuestionsContracts";
import { QUIZ_ID } from "../constants/temp";
import { QuestionsMapper } from "../mapper/QuestionsMapper";
import { UserMapper } from "../mapper/UserMapper";

export class QuestionService {

    constructor() {
        this.startQuestionnaire = this.startQuestionnaire.bind(this)
    }

    public startQuestionnaire(req: Request, res: Response) {
        this.findQuestionsSet(QUIZ_ID)
            .then(document => {
                const answers = document.questions[0].answers.map(answer => answer.answer);
                res.json(new StartQuestionnaireContract(answers));
            })
            .catch(console.log);
    }

    public getById(req: Request, res: Response) {
        QuestionsMapper.findOne(Number(req.params.questionId))
            .then(document => {
                if (document !== null && document.questions.length > 0) {
                    const answers = document.questions[0].answers.map(answer => answer.answer);
                    res.json(new StartQuestionnaireContract(answers));
                } else {
                    res.status(500).send({ 'error': "No Such Question" });
                }

            })
            .catch(console.log)
    }

    public submitAnswer(req: Request, res: Response) {
        const questionId = Number(req.params.questionId);
        QuestionsMapper.findOne(questionId)
            .then(document => {
                if (document === null || document.questions.length === 0) {
                    res.status(500).send({ 'error': "No Such Question" });
                } else {
                    UserMapper.updateAnswer(QUIZ_ID, questionId, Number(req.body.answer))
                        .catch(console.log)
                }
            })
    }

    private findQuestionsSet(id: String): Promise<any> {
        return Questions.findOne({ _id: id }, { questions: { $elemMatch: { id: 0 } } }, (error: Error, document: IQuestionsSet) => {
            if (document !== null) {
                User.findOneAndUpdate({ _id: 1 }, { questions: { id: [] } });
            }
        }).catch(console.log);
    }
    
    public getScore(req: Request, res: Response): any {
        res.json({score:100});
    }
}