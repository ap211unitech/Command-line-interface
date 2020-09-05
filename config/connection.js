const mongoose = require("mongoose");
const connection = mongoose.connect("mongodb://localhost:27017/CLI",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (error, link) => {

        if (error) {
            console.log("DB CONNECTION FAILS..")
        }
        else {
            console.log("DB CONNECTED..")
        }
    }
)

module.exports = connection;