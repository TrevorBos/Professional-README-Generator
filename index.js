// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  // This should be for the project title
  {
    type: "input",
    name: "title",
    message: "What is the your projects title? (Required)",
    validate: (userTitle) => {
      if (userTitle) {
        return true;
      } else {
        console.log("Please, you need to put in a title first.");
        return false;
      }
    },
  },

  // This is the description of the project

  {
    type: "input",
    name: "description",
    message: "What is the description for your project? (Required)",
    validate: (userDescription) => {
      if (userDescription) {
        return true;
      } else {
        console.log("Please, you need to put in a description first.");
        return false;
      }
    },
  },

  // This is the installation instructions for the project

  {
    type: "input",
    name: "installation",
    message: "How does one go about installing your project? (Required)",
    validate: (userInstallation) => {
      if (userInstallation) {
        return true;
      } else {
        console.log(
          "Please, you need to enter something for the installation process."
        );
        return false;
      }
    },
  },

  // This is for the usage information for the project

  {
    type: "input",
    name: "usage",
    message: "How do you primarily want your project to be used? (Required)",
    validate: (userUsage) => {
      if (userUsage) {
        return true;
      } else {
        console.log(
          "Please, you need to enter something. People need to know how to use your project."
        );
        return false;
      }
    },
  },

  // This is for the contribution section of the project

  {
    type: "input",
    name: "contribution",
    message: "How do you contribute to this project? (Required)",
    validate: (userContribution) => {
      if (userContribution) {
        return true;
      } else {
        console.log(
          "Please, you need to enter something, what if someone wants to contribute to your project?!"
        );
        return false;
      }
    },
  },

  // This is for the testing section of the project

  {
    type: "input",
    name: "testing",
    message: "How do you go about testing this project? (Required)",
    validate: (userTesting) => {
      if (userTesting) {
        return true;
      } else {
        console.log("Please, tell the people how they can test your project.");
        return false;
      }
    },
  },

  // This is for the license information for the project

  {
    type: "checkbox",
    name: "licensing",
    message: "Please choose a license for this project. (Required)",
    choices: ['Apache', 'MIT', 'Mozilla-Public', 'GNU-General-Public', 'Common-Development-and Distribution', 'None'],
    validate: (userLicense) => {
      if (userLicense) {
        return true;
      } else {
        console.log("Please choose a license, even if you choose none.");
        return false;
      }
    },
  },

  // This is for the GitHub username section

  {
    type: "input",
    name: "github",
    message: "Please enter your GitHub username! (Required)",
    validate: (userGitHub) => {
      if (userGitHub) {
        return true;
      } else {
        console.log(
          "Please enter your GitHub username. People should know how awesome you are!"
        );
        return false;
      }
    },
  },

  //This is for the email address information
  {
    type: "input",
    name: "email",
    message: "Please enter your email address! (Required)",
    validate: (userEmail) => {
      if (userEmail) {
        return true;
      } else {
        console.log("Please, enter in a valid email address!");
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log(
      "Your file has been created succesfully. Please check the README now :)"
    );
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (userInputs) {
    console.log(userInputs);
    writeToFile("README.md", generateMarkdown(userInputs));
  });
}

// Function call to initialize app
init();
