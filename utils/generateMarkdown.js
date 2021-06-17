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

function generateMarkdown(data) {
  return `# ${data.title}
  # ${project-title}

  ## Description

  ${data.description}

  ## Table of Contents
  ${table-of-contents}
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
  
  ## Installation
  ${data.installation}
  
  
  ## Usuage
  ${data.usuage}
  
  
  ## Credits
  ${data.credits}
  
  
  ## License
  ${license}
  [![License: ${data.license}](https://img.shields.io/badge/license-${data.license}-${data.color}.svg)]
  
  ---
    
  ## Badges
  
  ${renderLicenseBadge(data.license)}


  (http://opensource.org/licenses/${data.license})
  
  ## Features
  ${data.features}
  
  
  ## Contributing
  ${data.contributing}

  
  ## Tests
  ${data.tests}
    
`;
}

module.exports = generateMarkdown;
