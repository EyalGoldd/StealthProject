import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
    _id: Number,
    questions: any
}

const UsersSchema: Schema = new Schema({
    _id: Number,
    questions: Object
});

export default mongoose.model<IUser>('user', UsersSchema); 