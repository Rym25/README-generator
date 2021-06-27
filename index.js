// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
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
    message: 'Would you like to include a section with instructions on how to install your project?',
    default: true
},
{
    type: 'input',
    name: 'installation',
    message: 'How should users install your project?',
    when: ({confirmInstall}) => {
        if(confirmInstall) {
            return true;
        } else {
            return false;
        }
    }
},
{
    type: 'confirm',
    name: 'confirmUsage',
    message: 'Would you like to include a section with usage information for your project?',
    default: true
},
{
    type: 'input',
    name: 'usage',
    message: 'How is this project used? Please provide examples when applicable.',
    when: ({confirmUsage}) => {
        if(confirmUsage) {
            return true;
        } else {
            return false;
        }
    }
},
{
    type: 'confirm',
    name: 'confirmContribute',
    message: 'Would you like to include a section informing others how they can contribute to this project?',
    default: true
},
{
    type: 'input',
    name: 'contribute',
    message: 'How should others contribute to this project?',
    when: ({confirmContribute}) => {
        if(confirmContribute) {
            return true;
        } else {
            return false;
        }
    }
},
{
    type: 'confirm',
    name: 'confirmTests',
    message: 'If you wrote test for your project, would you like to provide examples of how to run them?',
    default: true
},
{
    type: 'input',
    name: 'tests',
    message: 'How should users run your tests?',
    when: ({confirmContribute}) => {
        if(confirmContribute) {
            return true;
        } else {
            return false;
        }
    }
},
{
    type: 'confirm',
    name: 'confirmLicense',
    message: 'Will you be including a license with this project?',
    default: true
},
{
    type: 'list',
    name: 'license',
    message: 'What kind of license will this project have?',
    // wasn't sure how extensive to make the list of licenses so started with the list
    choices: ['Unlicense', 'MIT', 'GNU GPLv3', 'AGPLv3','Apache 2.0'],
    when: ({confirmLicense}) => {
        if(confirmLicense){
            return true;
        } else {
            return false;
        }
    }
},
{
    type: 'confirm',
    name: 'confirmQuestions',
    message: 'Would you like to provide a link to your GitHub profile and email address so users can contact you with questions?',
    default: true
},
{
    type: 'input',
    name: 'userName',
    message: 'What is you GitHub username? (this will be used to provide a link to your GitHub profile)',
    when: ({confirmQuestions}) => {
        if(confirmQuestions){
            return true;
        } else {
            return false;
        }
    }
},
{
    type: 'input',
    name: 'email',
    message: 'What email would you like users to contact you at?',
    when: ({confirmQuestions}) => {
        if(confirmQuestions){
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
init()
.then(data => {
    console.log(data)
   return generateMarkdown(data)
})
.then(md => console.log(md));
