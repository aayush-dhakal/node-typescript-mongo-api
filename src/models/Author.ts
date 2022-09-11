import mongoose, { Document, Schema } from 'mongoose';

export interface IAuthor {
    name: string;
}

export interface IAuthorModel extends IAuthor, Document {}

const AuthorSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: true
        }
    },
    {
        versionKey: false // removes the version key filed from the model
    }
);

export default mongoose.model<IAuthorModel>('Author', AuthorSchema);
