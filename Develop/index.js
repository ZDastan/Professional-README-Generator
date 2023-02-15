// TODO: Include packages needed for this application
const generateMarkdown =require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
   
    {
      type: 'input',
      name: 'name',
      message: 'What is your project title?',
      
    },
    {
      type: 'input',
      message: 'Please enter description, installation instructions, usage information, contribution guidelines, and test instructions?',
      name: 'sections',
     
    },
    {
      type: 'checkbox',
      name: 'license',
      message: 'What is your preferred license?',
      choices:[
        "APACHE 2.O",
        "BSD 3",
        "GVL-GPL 3.0",
        "MIT",
        "None"
    ],
 },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
