const fs = require('fs');
const inquirer = require('inquirer');

// Need a badge for the chosen license near the top of the README and a notice in the license section that explains the license
// Links in the table of contents should move page to relevant section

let licenseOptions = ["GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "MIT License", "Boost Software License 1.0", "The Unlicense"];

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
        const filename = `README.md`;
        fs.writeFile(filename, 

`# ${data.title}

## Description

${data.description}
            
## Table of Contents
            
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

    , (err) => err ? console.error(err) : console.log('Thank you for your responses! Your README has been generated successfully.')
    );
});