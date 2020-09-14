const mongoose = require("mongoose");

const MettingSchema = new mongoose.Schema({

    name:{
        type:String
    },

    description:{
        type:String
    },

    room:{
        type:String
    },

    schedule:{
        type:String
    },

    owner:{
        type:String,
    },

    members:{
        type:Array,
        default:false
    },
    
    createdAt:{
        type:Date,
        default:Date.now(),
    }
})

const Mettings = mongoose.model("Metting", MettingSchema);

module.exports = Mettings;
