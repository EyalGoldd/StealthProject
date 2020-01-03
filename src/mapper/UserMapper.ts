import { QUIZ_ID, USER_ID } from "../constants";
import User from "../model/User";

export class UserMapper {
    public static updateAnswer(quizId: string, questionId: number, answer: number) {
        return UserMapper.findOne()
            .then(document => {
                if (document !== null) {
                    User.findByIdAndUpdate(USER_ID,
                        { $set: { toReplace: answer } }
                    ).catch(console.log);
                }
            }).catch(console.log)
    }

    public static findOne() {
        return User.findOne({ _id: USER_ID });
    }
}