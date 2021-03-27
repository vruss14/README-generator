# README Generator

## Description

This application is designed to create a high quality README template, and is meant to be time-saving for developers. The application utilizes vanilla JavaScript and inquirer (a package from npm that is free to install). Developers use the application by answering several prompts that are presented in the command line. The application will then use these user inputs to generate a customized README file.

Overall, this application was straightforward to build. I did learn how to create internal links within markdown, which was a great new skill to acquire since it is definitely nice to include a table of contents in long README files. I learned how to create a list in inquirer, and I also became more confident in using template literals. 

The most challenging part of creating the application was finding an efficient way to have the application run through a list of badges and select the proper badge URL for the badge image. I initially thought that creating a license object with a name and image url would make the most sense, but for the list to run correctly with inquirer, the list choices needed to be an array. So, I decided to keep the array for the list and create a conditional statement within right before the README file is created so that the right image URL is selected. 

Further improvements and features to the application include:

 - Creating a question at the end that asks the user if all information is correct, and if not, the user can edit their input
 - Creating an "other" option in the license choices so that the user can specify one that is not in the list
            
## Table of Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)
            
## Installation

For the application to run successfully, run "npm install inquirer" in the command line in the desired folder. No other installation steps are required.
            
## Usage

This application is designed as a README template. Additional sections and features can certainly be added to the generated README later on. This application simply provides a starting point so that the initial markdown formatting and sections are created efficiently.

Please see the GIF below that demonstrates the questions that will be asked in the command line:

![GIF of application](command-line-demo.gif)

For a full video of the application, please see this video: https://drive.google.com/file/d/1RbojqV8CytStbdxde-12d7s7uqp7_D20/view
            
## License

This project has not yet been officially licensed, and thus, standard copyright laws apply.
            
## Contributing

Valerie Russell has been the sole contributor for this project.
            
## Tests

No tests have been designed yet for the application. 
            
## Questions

If you have any questions about this application, my GitHub username is
vruss14 and you can view my GitHub profile at https://github.com/vruss14

If you have additional questions, feel free to reach out to me at vruss14@gmail.com.