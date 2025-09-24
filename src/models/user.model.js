import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      minlength: 3,
      maxlength: 20,
    },
    email: {
      type: String,
      unique: true,
      match: /.+\@.+\..+/,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    profile: {
      firstName: {
        type: String,
        minlength: 2,
        maxlength: 50,
      },
      lastName: {
        type: String,
        minlength: 2,
        maxlength: 50,
      },
      biography: {
        type: String,
        maxlength: 500,
        required: false,
      },
      avatarUrl: {
        type: String,
        required: false,
        match: /^(https?|ftp):\/\/[^\s"]+$/i,
      },
      birthDate: {
        type: Date,
        required: false,
      },
       deletedAt: {
        type: Date, 
        required: false,
        default: null }, // soft delete
    },
    timestamps:true,
    },
  {
    versionKey: false,
  }
);


export const UserModel = model("User", UserSchema);