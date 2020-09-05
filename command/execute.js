const program = require("commander");
const { addcustomer, findcustomer } = require("../commands");
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



program
    .command("find <name>")
    .alias('f')
    .description("Find a customer")
    .action(name => {
        findcustomer(name);
    })


program.parse(process.argv);