// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    //create data stucture to organize entries 
    let data = {
        title:'',
        description:'',
        installation:'',
        usage:'',
        contribution:'',
        tests:'',
        license:'',
        questions:''
    }

    inquirer
        .prompt([
            {
            type: 'input',
            message: 'What is your user name?',
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
        ])
}

// Function call to initialize app
init();
