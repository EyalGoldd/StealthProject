import mongoose, { Document, Schema } from "mongoose";

export interface IQuestionsSet extends Document {
    _id: String
    questions: Array<IQuestion>
}

export interface IQuestion extends Document {
    question: String,
    answers: Array<IAnswer>
}

export interface IAnswer extends Document {
    answer: string,
    correct: boolean
}

const QuestionsSchema: Schema = new Schema({
    _id: Schema.Types.ObjectId,
    questions: [
        {
            question: { type: String, required: true },
            answers: [{ answer: String, correct: Boolean, id: Number }]
        }]
});

export default mongoose.model<IQuestionsSet>('question', QuestionsSchema); 