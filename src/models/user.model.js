import mongoose, {Schema} from "mongoose";

const userSchema = new mongoose(
    {
        user:{
            type: String,
            require: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },

        email:{
            type: String,
            require: true,
            unique: true,
            lowercase: true,
            trim: true,
        },

        fullname:{
            type: String,
            require: true,
            lowercase: true,
            trim: true,
        },

        avater:{
            type: String, //Cloudinary Image

        },

        coverImage:{
            type: String, //Cloudinary Image

        },

        watchHistory:[
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],

        password:{
            type: String,
            require: [true, 'password is true']
        },

        refreshToken:{
            type: String
        }
    },
    {
        timestampes: true
    }
)

export const User = mongoose.model("User", userSchema)