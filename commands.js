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
        .catch(err => { console.log(err); process.exit(); })
}

//List all customers
const listcustomers = () => {
    data.find()
        .select("-__v")
        .then(customers => {
            console.log(customers);
            console.log(`Total Customers: ${customers.length}`);
            process.exit();
        })
        .catch(err => { console.log(err); process.exit(); })
}


//Find a customer
const findcustomer = (name) => {
    let search = new RegExp(name, 'i');
    data.find({ $or: [{ firstname: search }, { lastname: search }] })
        .select("firstname lastname phone email")
        .then(customers => {
            console.log(customers);
            console.log(`${customers.length} matches`);
            process.exit();
        })
        .catch(err => { console.log(err); process.exit(); })
}

//Update a customer
const updatecustomer = (_id, new_customer) => {
    data.updateOne({ _id: _id }, new_customer)
        .then(() => {
            console.log("Customer Updated");
            process.exit();
        })
        .catch(err => { console.log(err); process.exit(); })
}


//Remove a customer
const removecustomer = (_id) => {
    data.deleteOne({ _id: _id })
        .then(() => {
            console.log("Customer Removed");
            process.exit();
        })
        .catch(err => { console.log(err); process.exit(); });
}

module.exports = {
    findcustomer,
    addcustomer,
    updatecustomer,
    listcustomers,
    removecustomer
}