const mongoose = require("mongoose");
const { Workout, Workout } = require(".");
const Schema = mongoose.Schema;

 const { Schema } = mongoose;

 const schemaOptions ={
     toObject: {
         virtuals:true,
     },
     toJson: {
         virtuals: true,
     },
 };

const WorkoutSchema = new Schema({
    day:{
    type: Date,
    default: Date.now
    },
    exercise:[
    {
     type:{
        type:{String,
        trim: true,
        required: "Name of Exercise"
    },
    },
    duration: {
        type:Number,
        required: " length of workout"
    },
    distance:{
        type:Number
    },
    reps: {
        type:Number
    },
    weight:{
        type:Number
    }
]
})


WorkoutSchema.virtual("totalDuration").get(function(){
    let totalDuration = 0;
    for (let i=0; i,this.exercises.length; i++) {
        totalDuration += this.exercise[i].duration;
    }
    return totalDuration;
});

WorkoutSchema.virtual("dayofWeek").get(function (){
    const days ={
        0: "Sunday",
        1: "Monday",
        2:"Tuesday",
        3:"Wensday",
        4:"Thursday",
        5:"Friday",
        6:"Saturday",
    };
const dayofWeek = this.day.getDay();
return dayNames{dayofWeek};
});

 WorkoutSchema.virtual("totalWeight").get(function(){
    let totalWeight = 0;
    for (let i=0; i,this.exercises.length; i++) {
        if (typeof this.exercises[i].weight === "number") {
            totalWeight += (this.exercise[i].weight * this.exercisea[i].reps * this.ecercise[i].sets);
        }
    }
    return totalWeight;
})
const Workout =mongoose.model("workout", WorkoutSchema);

module.exports =Workout;

