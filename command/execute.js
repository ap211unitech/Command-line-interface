const program = require("commander");
const { addcustomer, findcustomer, updatecustomer, listcustomers, removecustomer } = require("../commands");
const { prompt } = require("inquirer");

//Questions for adding Customer
let questions = [
    {
        type: "input",
        name: "firstname",
        message: "Customer First Name"
    },
    {
        type: "input",
        name: "lastname",
        message: "Customer Last Name"
    }, {
        type: "input",
        name: "phone",
        message: "Customer Phone Number"
    }, {
        type: "input",
        name: "email",
        message: "Customer Email"
    }
]

program
    .version('1.0.0')
    .description('Client Management System');

//Add a customer

// program
//     .command("add <firstname> <lastname> <phone> <email>")
//     .alias('a')
//     .description("Add a customer")
//     .action((firstname, lastname, phone, email) => {
//         let customer = {
//             firstname: firstname,
//             lastname: lastname,
//             phone: phone,
//             email: email
//         }
//         addcustomer(customer)
//     })

program
    .command("add")
    .alias("a")
    .description("Add a customer")
    .action(() => {
        prompt(questions).then(answers => addcustomer(answers))
    })

//List all customers
program
    .command("list")
    .alias("l")
    .description("List all customers")
    .action(() => {
        listcustomers();
    })


//Find a customer 
program
    .command("find <name>")
    .alias('f')
    .description("Find a customer")
    .action(name => {
        findcustomer(name);
    })


//Update a customer
program
    .command("update <_id>")
    .alias("u")
    .description("Update a Customer Data")
    .action((_id) => {
        prompt(questions).then((answers) => updatecustomer(_id, answers));
    })

//Remove a Customer
program
    .command("remove <_id>")
    .alias("r")
    .description("Remove a Customer Data")
    .action((_id) => {
        removecustomer(_id)
    })


program.parse(process.argv);