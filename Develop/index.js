//  Include packages for this application
const generateMarkdown =require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');

// Array of questions for user input
const questions = [
   
    {
      type: 'input',
      name: 'title',
      message: 'What is your project title?',
      
    },
    {
      type: 'input',
      message: 'Please provide a short description explaining the what, why, and how of your project?',
      name: 'description',
     
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
        name: 'installation',
       
      },
      {
        type: 'input',
        message: 'Provide instructions and examples for use. Include screenshots as needed.',
        name: 'usage',
       
      },
      {
        type: 'input',
        message: 'How would you test this project?',
        name: 'test',
      },  
      {
        type: 'input',
        message: 'List your collaborates',
        name: 'credit',
    },
    {
      type: 'list',
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
 {
    type: 'input',
    message: 'Please enter your GitHub username',
    name: 'question',
   
  },
  {
    type: 'input',
    message: 'Enter your email:',
    name: 'email',
},
{
    type: 'input',
    message: 'Where is this application deployed at?',
    name: 'deploy',
},
  ];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}


// Function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers)=>{
        console.log(answers)
        fs.writeFileSync(`./src/README.md`,generateMarkdown(answers))
    })
}

// Function call to initialize app
init();
