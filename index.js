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
        message: "Please write a description of your project.",
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
        type: "checkbox",
        message: "Select a license.",
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
        message: "Who was involved in the creation of this application?",
        name: "contributors"
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
[License](https://img.shields.io/badge/license-${response.license}-blue)
    ${response.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributers](#contributors)
* [Questions](#questions)
## Installation
    ${response.installation}
## Usage
    ${response.usage}
## License
*   This application is covered by the [${response.license}](https://choosealicense.com/licenses/${response.license}/) license.
## Contributors
    ${response.contributors}
## Questions
    If you have any questions regarding this application, feel free to reach out to me via the Github or email provided below.
*   Github: [${response.username}](https://github.com/${response.username})
*   Email: ${response.email}`;
fs.writeFile(`./README.md`, readmeContent, (err) => {
    if (err) console.log(err);
    console.log("Your README is now available for view.");
})
})