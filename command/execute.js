const program = require("commander");
const { addcustomer, findcustomer } = require("../commands");
const { find } = require("../config/commands");

program
    .version('1.0.0')
    .description('Client Management System');

//Add a customer
program
    .command("add <firstname> <lastname> <phone> <email>")
    .alias('a')
    .description("Add a customer")
    .action((firstname, lastname, phone, email) => {
        let customer = {
            firstname: firstname,
            lastname: lastname,
            phone: phone,
            email: email
        }
        addcustomer(customer)
    })

program
    .command("find <name>")
    .alias('f')
    .description("Find a customer")
    .action(name => {
        findcustomer(name);
    })


program.parse(process.argv);