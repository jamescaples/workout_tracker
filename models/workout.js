const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day:{
            type: Date,
            default: () => new Date()
        },
        exercises:[
            {
                type:{
                    type:String,
                    required: "Enter typeof expercise your doing"
                },
                name:{
                    type: String,
                    required: "Enter excercise name"
                },
                duration:{
                    type: Number,
                    required:"What is the duration of the excercise"
                },
                weight:{
                    type: Number
                },
                reps:{
                    type: Number
                },
                sets: {
                    type: Number
                },
                distance: {
                    type: Number
                }
            }
        ]
    }
);

const Workout = mongoose.model("Workout",workoutSchema );
module.exports = Workout;