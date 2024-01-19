const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
// what will I need to populate the template literal for the readme markdown document
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
function writeToFile(fileName, data) {
    const {} = questions;


    fs.writeFile(fileName, data, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Success!");
        }
      });
}

// TODO: Create a function to initialize app

// initialize the template that fills in the responses
function init() {
    inquirer
    .prompt(questions)
    .then((response)(writeToFile())) 
}

// Function call to initialize app
init();
