import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name:{
    type: String,
    required:true
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:["intructor","student"],
        default:'student'
    },
    photoUrl:{
        type:String,
        default:""
    },
    enrolledCourses:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Course'
        }
    ]
},{timestamps:true});

export const User =mongoose.model("User",userSchema);