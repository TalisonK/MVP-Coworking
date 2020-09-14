const Metting = require("../database/models/metting")

const mongoose = require("./database.services").mongoose;

// Mongoose Group Schema
require("../database/models/metting");
const Mettings = mongoose.model("Metting");

const createMetting = async(data) => {
    await Metting.create({
            name:data.name,
            description:data.description
        })
}

const hasMetting = async(name) => {
    const met = await Metting.findOne({name: name});
    const has = met !== null;
    return has;
}

const getMettings = async() => {
    const data = await Metting.find();
    return data;
}

const editMetting = async(who, what, newthing ) =>{
    const data = await Metting.findOne(who);
    data[what] = newthing;
    await Metting.replaceOne(who, data);
}

const removeMetting = async(name) =>{
    const data = await Metting.findOne({name:name});
    await Metting.remove({name:name});
    if(await Metting.findOne({name:name}) === null){
        return data;
    }
}

module.exports = { createMetting, hasMetting, getMettings, editMetting, removeMetting };