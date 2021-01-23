const fs = require("fs");
const inquirer = require("inquirer");

inquirer.prompt([
    {
        type: "input",
        message: "Please write your project's name",
        name: "name"
    },
    {
        type: "input",
        message: "What is the description of your product?",
        name: "description"
    },
    {
        type: "input",
        message: "How would you like for your project/applicaiton to be used?",
        name: "usage"
    },
    {
        type: "input",
        message: "Who are the contributors of this project?",
        name: "contributors"
    },
    {
        type: "checkbox",
        message: "Please select a license",
        choices: [
            "Apache",
            "MIT",
            "ISC",
            "GNU GPLv3"
        ],
        name: "license"
    },
    {
        type: "input",
        message: "What is your Github username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    }
]);