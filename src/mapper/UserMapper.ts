import { QUIZ_ID, USER_ID } from "../constants";
import User from "../model/User";

export class UserMapper {
    public static updateAnswer(quizId: string, questionId: number, answer: number) {
        return UserMapper.findOne()
            .then(document => {
                if (document !== null) {
                    // const answers: {} = document.questions.get(quizId);
                    const toReplace = `questions.${quizId}.${questionId}`;
                    console.log(toReplace);
                    // console.log(updateAnswers);
                    User.findByIdAndUpdate(USER_ID,
                       {$set:{ toReplace: answer }}
                    ).exec().then(console.log).catch(console.log);
                }
            }).catch(console.log)
    }

    public static findOne() {
        return User.findOne({ _id: USER_ID });
    }
}