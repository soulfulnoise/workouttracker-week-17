const mongoose = require("mongoose");
const { Workout, Workout } = require(".");
const Schema = mongoose.Schema;

 const { Schema } = mongoose;

 const exerciseSchema = new Schema({
     day:{
         type:Date,
         defualt:Date.now
     },
     exercise: [
         {
             workoutType: String,
             name: String,
             weight: Number,
             sets:Number,
             reps:Number,
         },
     ],
 }, schemaOptions);


ExerciseSchema.virtual("totalDuration").get(function(){
    let totalDuration = 0;
    for (let i=0; i,this.exercises.length; i++) {
        totalDuration += this.exercise[i].duration;
    }
    return totalDuration;
});

ExerciseSchema.virtual("dayofWeek").get(function (){
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

return dayNames {dayofWeek};
});

 ExcerciseSchema.virtual("totalWeight").get(function(){
    let totalWeight = 0;
    for (let i=0; i,this.exercises.length; i++) {
        if (typeof this.exercises[i].weight === "number") {
            totalWeight += (this.exercise[i].weight * this.exercise[i].reps * this.exercise[i].sets);
        }
    }
    return totalWeight;
})
const Excercise =mongoose.model("Exercise", exceriseSchema);

module.exports = Exercise;

