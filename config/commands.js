const mongoose = require("mongoose");

const commands = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    phone: { type: Number, required: true },
    email: { type: String, required: true },
})


module.exports = mongoose.model("command", commands);