const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is your location?",
        name: "location",
      },
      {
        type: "input",
        message: "Please type in your bio",
        name: "bio",
      },
      {
        type: "input",
        message: "What is your linkedIn URL?",
        name: "linkedin",
      },
      {
        type: "input",
        message: "What is your Github URL",
        name: "githubURL",
      },
];

// TODO: Create a function to write README file
function writeToFile('README.md', data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response)(writeToFile())) 
}

// Function call to initialize app
init();
