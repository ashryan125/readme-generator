// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');

const markdownFile = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = () => {

  return inquirer.prompt([
    {
      type: 'input',
      name: 'project-title',
      message: 'What is your project title? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your project name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is your project description? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your project description!');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'contentConfirm',
      message: 'Would you like to include a table of contents?',
      default: true
    },
    {
      type: 'input',
      name: 'table-of-contents',
      message: 'generate table of contents?',
      when: ({ contentConfirm }) => {
        if (contentConfirm) {
          return true;
        } else {
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Provide installation instructions: (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter installation instructions!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'usuage',
      message: 'What is the usuage for your project?'
    },
    {
      type: 'input',
      name: 'credits',
      message: 'Who should be getting credit for this project?'
    },
    {
      type: 'confirm',
      name: 'confirmLicense',
      message: 'Do you want to include a project license?',
      default: true
    },
    {
      type: 'list',
      name: 'license',
      message: 'Which license do you want to include?',
      choices: ["ISC", "MIT", "Mozilla", "Open"],
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please choose a license');
        }
      },
      when: ({ confirmLicense }) => {
        if (confirmLicense) {
          return true;
        } else {
          return false;
        }
      }
    },
    {
      type: "list",
      name: "color",
      message: "Chose the color for your license badge.",
      choices: ["red", "blue", "green", "yellow"],
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please choose a badge color');
        }
      },
      when: ({ confirmLicense }) => {
        if (confirmLicense) {
          return true;
        } else {
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'features',
      message: 'Provide a description of features'
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Who should be listed under contributing?'
    },
    {
      type: 'confirm',
      name: 'testConfirm',
      message: 'Do you want to include a test section?',
      default: false
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What tests can be run?',
      when: ({ testConfirm }) => {
        if (testConfirm) {
          return true;
        } else {
          return false;
        }
      }
    }
  ])

    .then(readmeData => {
      // portfolioData.questions.push(readmeData);
    });
};

promptUser().then(answers => console.log(answers));


// TODO: Create a function to write README file
fs.writeToFile(('./dist/README.md', data), err => {
  if (err) throw new Error(err);

  console.log('README complete. Checkout out README.md to see output');
});

// TODO: Create a function to initialize app
function init() {
  return inquirer.promptUser(questions);

  // use inquirer ask questions (activity 2 from monday class)
  // call generateMarkdown Function - which will return a string
  // call writeToFile function pass to it a file name and the string returned by the generateMarkdown function
};


// Function call to initialize app
init()
  .then(data => generateMarkdown(data))
  .then(generatedReadme => writeToFile('README.md', generatedReadme))
  .catch(err => {
    console.log(err);
  });

