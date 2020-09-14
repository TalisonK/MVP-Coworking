const User = require("../database/models/User");

const mongoose = require("./database.services").mongoose;

// Mongoose Group Schema
require("../database/models/User");
const Users = mongoose.model("User");

const createUser = async (email, password) => {
        await Users.create({
            email,
            password
        })
}

const fetchUser = async (email) => {
    const data = await User.findOne({email:email});
    return data;
}

const fetchUserbyId = async (id) => {
    const data = await User.findById(id)
    return data;
}

const hasUser = async (email) => {
    const data = await User.find({email:email})
    if(data.length > 0) return true;
    return false;
}

const validateUser = async (email) => {
    await editUser({email:email}, "confirmedEmail", true);
}

const getUsers = async () => {
    const data = await User.find();
    return data;
}

const editUser = async (who, what, newthing) => {
    const data = await User.findOne(who);
    data[what] = newthing;
    await User.replaceOne(who, data);
}

const check = async(email) => {
    const data = await User.findOne({email:email});
    return (data !== null && data.confirmedEmail === true)? true : false;
}

module.exports = { createUser, hasUser, fetchUser, fetchUserbyId, validateUser, getUsers, check, editUser};