const connection = require("./config/connection");
const mongoose = require("mongoose");
const data = require("./config/commands");


//Add a customer
const addcustomer = (customer) => {
    data.create(customer)
        .then(() => {
            console.log("Customer created");
            process.exit()
        })
        .catch(err => {
            console.log(err)
        })
}

//Find a customer
const findcustomer = (name) => {
    let search = new RegExp(name, 'i');
    data.find({ $or: [{ firstname: search }, { lastname: search }] })
        .select("firstname lastname phone email -_id")

        .then(customers => {
            console.log(customers);
            console.log(`${customers.length} matches`);
            process.exit();
        })
        .catch(err => {
            console.log(err);
        })
}


module.exports = {
    findcustomer,
    addcustomer
}