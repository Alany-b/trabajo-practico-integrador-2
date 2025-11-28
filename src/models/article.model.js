import { Schema, model } from "mongoose";

const ObjectId = Schema.Types.ObjectId;

const ArticleSchema = new Schema(
  {
    title: {
      type: String,
      minlength: 3,
      maxlength: 200,
    },
    content: {
      type: String,
      minlength: 50,
    },
    excerpt: {
      type: String,
      maxlength: 500,
      required: false,
    },
    status: {
      type: String,
      enum: ["published", "archived"],
      default: "published",
    },
    author: {
      type: ObjectId,
      ref: "User",
    },
    tags: [
      {
        type: ObjectId,
        ref: "Tag",
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const ArticleModel = model("Article", ArticleSchema);
