import { QUIZ_ID } from "../constants";
import Question from "../model/Question";

export class QuestionsMapper {
    public static findOne(questionId: Number) {
        return Question.findOne({ _id: QUIZ_ID }, { questions: { $elemMatch: { id: Number(questionId) } } })
    }
}