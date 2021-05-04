// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdownGenerator = require('./utils/generateMarkdown.js')
const util = require('util')

// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    message: 'What is your Github user name?',
    name: 'name',
    },
    {
    type: 'input',
    message: 'What is your email?',
    name: 'email',
    },
    {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
    },
    {
    type: 'input',
    message: 'Describe your application:',
    name: 'description',
    },
    {
    type: 'input',
    message: 'How do you install your application?',
    name: 'installation',
    },
    {
    type: 'input',
    message: 'How do you use your application?',
    name: 'usage',
    },
    {
    type: 'input',
    message: 'How should developers contribute to your project?',
    name: 'contribution',
    },
    {
    type: 'input',
    message: 'What is the testing procedure for your project?',
    name: 'tests',
    },
    {
    type: 'list',
    message: 'What license is your project developed under?',
    name: 'license',
    choices: ['Apache 2.0', 'GNU GPL v3', 'MIT', 'Mozilla Public License 2.0','[None]'],
    },
];

const promptUserQuestions = () => {
    return inquirer.prompt(questions)
}

// TODO: Create a function to write README file
const writeToFile  = util.promisify(fs.writeFile);


// TODO: Create a function to initialize app
function init() {
    
    promptUserQuestions()
        .then((answers)=>writeToFile('README.md',markdownGenerator(answers)))
        .then(()=>console.log("Successfully Generated README file!"))
        .catch((err)=> console.log(err));
}

// Function call to initialize app
init();
