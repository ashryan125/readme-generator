// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  if (!license) {
    return '';
  }

  return `
   // license badge
  `;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

const renderLicenseLink = license => {
  if (!license) {
    return '';
  }

  return `
   [License Link](https://www.${link}.com)
  `;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

const renderLicenseSection = license => {
  if (!license) {
    return '';
  }

  return `
   // license section
  `;
}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  return `# ${data.title}
  # ${project-title}

  ## Description

  ${description}

  ## Table of Contents
  ${table-of-contents}
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
  
  ## Installation
  ${installation}
  
  
  ## Usuage
  ${usuage}
  
  
  ## Credits
  ${credits}
  
  
  ## License
  ${license}
  
  
  ---
    
  ## Badges
  ${badges}
  
  ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
  
  
  ## Features
  ${features}
  
  
  ## Contributing
  ${contributing}

  
  ## Tests
  ${tests}
    
`;
}

module.exports = generateMarkdown;
