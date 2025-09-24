import {Schema , model} from "mongoose";

// const  ObjectId  = Schema.Types.ObjectId;

const TagSchema = new Schema(
    {
        name: {
            type: String,
            unique: true,
            minlength: 2,
            maxlength: 30,

        },
        description: {
            type: String,
            maxlength: 200,
            required: false,
        },  
        timestamps:true,
    },
    {
        versionKey: false,
    }
);
export const TagModel = model("Tag", TagSchema);