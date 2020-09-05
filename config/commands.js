const mongoose = require("mongoose");

const commands = new mongoose.Schema({
    firstname: { type: String },
    lastname: { type: String },
    phone: { type: String },
    email: { type: String },
})


module.exports = mongoose.model("command", commands);