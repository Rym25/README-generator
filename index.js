// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the title of this project?',
    validate: titleInput => {
        if (titleInput) {
            return true;
        } else {
            console.log('Please enter the project title.');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'description',
    message: 'Please provide a description of the project. (think about covering Why you built this project? What are the goals of the project? and how does the project accomplish the goals?)',
    validate: descriptionInput => {
        if (descriptionInput) {
            return true;
        } else {
            console.log('Please enter a project description.');
            return false;
        }
    }
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
