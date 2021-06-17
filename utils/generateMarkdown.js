// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// const renderLicenseBadge = license => {
//   if (!license) {
//     return '## kevin;s ${license}';  // generate markdown for the license
//   }

//   return `
//    // https://img.shields.io/static/v1?label=<LABEL>&message=<MESSAGE>&color=<COLOR>
//   `;
// }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string

// const renderLicenseLink = license => {
//   if (!license) {
//     return '';
//   }

//   return `
//    [License Link](https://www.${link}.com)
//   `;
// }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string

// const renderLicenseSection = license => {
//   if (!license) {
//     return '';
//   }

//   return `
//    // license section
//   `;
// }

// TODO: Create a function to generate markdown for README

const generateMarkdown = answers => {
  return `# ${answers.title}

  ## Description
  ${answers.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
  ## Installation
  ${answers.installation}
  
  ## Usuage
  ${answers.usuage}
  
  ## Credits
  ${answers.credits}
  
  ## License
  [![License: ${answers.license}](https://img.shields.io/badge/license-${answers.license}-${answers.color}.svg)]
  (http://opensource.org/licenses/${answers.license})
 
  ## Features
  ${answers.features}
  
  ## Contributing
  ${answers.contributing}

  ## Tests
  ${answers.tests}
`;
}

module.exports = generateMarkdown;
