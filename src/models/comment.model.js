import { Schema, model } from "mongoose";

const ObjectId = Schema.Types.ObjectId;

const CommentSchema = new Schema(
  {
    content: {
      type: String,
      minlength: 5,
      maxlength: 500,
    },
    author: {
      type: ObjectId,
      ref: "User",
    },
    article: {
      type: ObjectId,
      ref: "Article",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
export const CommentModel = model("Comment", CommentSchema);
