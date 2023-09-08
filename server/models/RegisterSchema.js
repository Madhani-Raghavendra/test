import mongoose from "mongoose";

const Schema = mongoose.Schema;


const RegisterModel = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    phoneNumber: {
        type: Number,
        trim: true,
        required: true,
    },
    password: {
        type: String,
        trim: true,
        required: true,
    },
    course: {
        type: String,
        trim: true,
        enum: ['MERN STACK', 'MEAN STACK', 'JAVA FULL STACK',"Devops"]
    }
})

export default mongoose.model("Register", RegisterModel);