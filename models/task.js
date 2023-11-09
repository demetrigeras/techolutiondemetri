import mongoose, { Schema } from "mongoose";


const Taskschema = new mongoose.Schema({
    Name: {type: String},
    taskName: {type: String},
    taskDate:{type: Date}

})

export default mongoose.model("tasks", Taskschema);