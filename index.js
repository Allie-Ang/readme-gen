// Includes packages needed for this application
const inquirer = require("inquirer");
const { writeFile } = require("fs").promises;
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// Creates an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is Projects Title?",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a short description of your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "How is your application installed?",
  },
  {
    type: "input",
    name: "usage",
    message: "What is your app being used for?",
  },
  {
    type: "input",
    name: "contributions",
    message: "How does someone contribute to this project?",
  },
  {
    type: "input",
    name: "test",
    message: "How does someone test your project?",
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license does the project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "NONE"],
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
];

// Creates a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    fs.writeFileSync(
      path.join(process.cwd(), "/dist", "README.md"),
      generateMarkdown(answers)
    );
    console.log("Success, your file is located in the dist directory");
  });
}

// Function call to initialize app
init();
