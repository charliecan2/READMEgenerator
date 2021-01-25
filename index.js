const fs = require('fs');
const inquirer = require('inquirer');

inquirer.prompt([
    {
        type: "input",
        message: "What is your project's name?",
        name: "name"
    },
    {
        type: "input",
        message: "Please write a description of your project",
        name: "description"
    },
    {
        type: "input",
        message: "What are the steps required to install your project? Provide a detailed description.",
        name: "installation"
    },
    {
        type: "input",
        message: "How is your application used?",
        name: "usage"
    },
    {
        type: "input",
        message: "Who was involved in the creation of this application?",
        name: "credits"
    },
    {
        type: "checkbox",
        message: "Choose a license",
        choices: [
            "apache-2.0",
            "mit",
            "gpl-3.0",
            "unlicense"
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
]).then((response) => { const readmeContent = 
`# ${response.name}
## Description
    ${response.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Connect](#connect)
## Installation
    ${response.installation}
## Usage
    ${response.usage}
## Credits
    ${response.credits}
## License
*   [${response.license}](https://choosealicense.com/licenses/${response.license}/)
## Connect
*   Github: [${response.username}](https://github.com/${response.username})
*   Email: ${response.email}`;
fs.writeFile(`./README.md`, readmeContent, (err) => {
    if (err) {
        console.log(err);
     }
    else {
        console.log("Your README is now available for view.");
    }
})
})