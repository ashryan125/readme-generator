// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
const renderLicenseBadge = licenseText => {
  if (!licenseText) {
    return ''; 
  }

  return `
  ## License
  [![License: ${licenseText.license}](https://img.shields.io/badge/license-${licenseText.license}-${licenseText.color}.svg)]
  (http://opensource.org/licenses/${licenseText.license})
  `;
}

const renderTests = testsText => {
  if (!testsText) {
    return ``;
  }
  return `
  ## Tests
  ${testsText.tests}
  `;
}

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
  
  ${renderLicenseBadge(answers.license)}
 
  ## Features
  ${answers.features}
  
  ## Contributing
  ${answers.contributing}

  ${renderTests(answers.tests)}
`;
}

module.exports = generateMarkdown;
