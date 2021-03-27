const fs = require('fs');
const inquirer = require('inquirer');
let licenseBadge;
let licenseOptions = ["GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "MIT License", "Boost Software License 1.0", "The Unlicense", "Creative Commons 0", "Eclipse Public License 1.0", "IBM Public License Version 1.0"].sort();

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the name of your application?',
            name: 'title'
        },

        {
            type: 'input',
            message: 'How would you describe your application?',
            name: 'description'
        },

        {
            type: 'input',
            message: 'What are the instructions to install the application?',
            name: 'instructions'
        },

        {
            type: 'input',
            message: 'What usage information should the user be aware of?',
            name: 'usage'
        },

        {
            type: 'input',
            message: 'What are the contribution guidelines for the application?',
            name: 'contribution'
        },

        {
            type: 'input',
            message: 'What are the test instructions for the application?',
            name: 'tests'
        },

        {
            type: 'list',
            message: 'What license do you have for the application?',
            name: 'license',
            choices: licenseOptions
        },

        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'username'
        },

        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email'
        },

    ])

    .then(function(data) {
        
        if (data.license === "GNU AGPLv3") {
            licenseBadge = "https://img.shields.io/badge/License-AGPL%20v3-blue.svg";
        } else if (data.license === "GNU GPLv3") {
            licenseBadge = "https://img.shields.io/badge/License-GPLv3-blue.svg";
        } else if (data.license === "GNU LGPLv3") {
            licenseBadge = "https://img.shields.io/badge/License-LGPL%20v3-blue.svg";
        } else if (data.license === "Mozilla Public License 2.0") {
            licenseBadge = "https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg";
        } else if (data.license === "Apache License 2.0") {
            licenseBadge = "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
        } else if (data.license === "MIT License") {
            licenseBadge = "https://img.shields.io/badge/License-MIT-yellow.svg";
        } else if (data.license === "Boost Software License 1.0") {
            licenseBadge = "https://img.shields.io/badge/License-Boost%201.0-lightblue.svg";
        } else if (data.license === "The Unlicense") {
            licenseBadge = "https://img.shields.io/badge/license-Unlicense-blue.svg";
        } else if (data.license === "Creative Commons 0") {
            licenseBadge = "https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg"
        } else if (data.license === "Eclipse Public License 1.0") {
            licenseBadge = "https://img.shields.io/badge/License-EPL%201.0-red.svg";
        } else if (data.license === "IBM Public License Version 1.0") {
            licenseBadge = "https://img.shields.io/badge/License-IPL%201.0-blue.svg";
        }

        const filename = `README.md`;
        fs.writeFile(filename,

`# ${data.title} ![License](${licenseBadge})

## Description

${data.description}
            
## Table of Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)
            
## Installation

${data.instructions}
            
## Usage

${data.usage}
            
## License

This project has been licensed through a/an ${data.license}.
            
## Contributing

${data.contribution}
            
## Tests

${data.tests}
            
## Questions

If you have any questions about this application, ${data.title}, my GitHub username is
${data.username} and you can view my GitHub profile at https://github.com/${data.username}

If you have additional questions, feel free to reach out to me at ${data.email}.`

    , (err) => err ? console.error(err) : console.log("Thank you for your responses! Your README has been generated successfully.")
    );
});