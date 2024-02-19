const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");

// TODO: Create an array of questions for user input
// what will I need to populate the template literal for the readme markdown document
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Project Description?",
    name: "description",
  },
  {
    type: "input",
    message: "Installation Steps:",
    name: "installation",
  },
  {
    type: "input",
    message: "Github URL?",
    name: "githubLink",
  },
  {
    type: "input",
    message: "Deployed URL?",
    name: "deployedLink",
  },
  {
    type: "input",
    message: "Credits?",
    name: "credits",
  },
  {
    type: "list",
    message: "License?",
    name: "license",
    choices: [
      "MIT",
      "Apache license 2.0",
      "Mozilla Public License 2.0"
    ],
  },
  {
    type: "input",
    message: "Features?",
    name: "features",
  },
  {
    type: "input",
    message: "How to Contribute?",
    name: "contribute",
  },
  {
    type: "input",
    message: "Tests?",
    name: "tests",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
 

  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Remember to Edit your inputs");
    }
  });
}

// TODO: Create a function to initialize app

// initialize the template that fills in the responses
function init() {
    inquirer.prompt(questions)
      .then((response) => generateMarkdown(response))
      .then((response2) => {
        writeToFile("README.md", response2);
        console.log("README.md file generated successfully.");
      })
      .catch((err) => {
        console.log(err);
      });
  }

// Function call to initialize app
init();
