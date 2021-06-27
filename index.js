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
},
{
    type: 'confirm',
    name: 'confirmInstall',
    message: 'Would you like to include a section with instructions on how to install your application?',
    default: true
},
{
    type: 'input',
    name: 'installation',
    message: 'How should users install your application?',
    when: ({confirmInstall}) => {
        if(confirmInstall) {
            return true;
        } else {
            return false;
        }
    }
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init().then(data => console.log(data));
