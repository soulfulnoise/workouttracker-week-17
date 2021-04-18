const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Newworkout = new Schema({
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
},
]
});
