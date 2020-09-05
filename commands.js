const connetion = require("./config/connection");
const data = require("./config/commands");


//Add a customer
const addcustomer = (customer) => {
    data.create(customer)
        .then(() => {
            console.log("Customer created");
            connetion.close();
        })
        .catch(err => {
            console.log(err)
        })
}

//Find a customer
const findcustomer = (name) => {
    let search = name.toLowerCase();
    data.find({ $or: [{ firstnname: search, lastname: search }] })
        .then(customers => {
            console.log(customers);
            console.log(`${customers.length} matches`)
            connetion.close();
        })
        .catch(err => {
            console.log(err);
        })
}


module.exports = {
    findcustomer,
    addcustomer
}