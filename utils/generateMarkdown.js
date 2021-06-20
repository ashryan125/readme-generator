// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// const badgeColor = colorText => {
//   if (!colorText) {
//     return "";
//   }
//   return 
//    console.log(colorText)
//   ;
// }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// const renderLicenseBadge = licenseText => {
//   if (!licenseText) {
//     return ''; 
//   }

//   return `
//   ## License
//   ![License: ${licenseText}](https://img.shields.io/badge/${licenseText}-License-<PLACEHOLDER>?style=for-the-badge&logo=appveyor)
  
//   http://opensource.org/licenses/${licenseText}
//   `;
// }



const renderTests = testsText => {
  if (!testsText) {
    return ``;
  }
  return `
  ## Tests
  ${testsText}
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
  * [Questions](#questions)
  
  ## Installation
  ${answers.installation}
  
  ## Usuage
  ${answers.usuage}
  
  ## Credits
  ${answers.credits}
  
  ## License
  ![License: ${answers.license}](https://img.shields.io/badge/${answers.license}-License-${answers.color}?style=for-the-badge&logo=appveyor)
  
  [Click here for ${answers.license} license details](https://opensource.org/licenses/${answers.license})
 
  ## Features
  ${answers.features}
  
  ## Contributing
  ${answers.contributing}

  ${renderTests(answers.tests)}

  ## Questions
  ${answers.username}

  ${answers.email}
  
  ${answers.instructions}
`;
}

module.exports = generateMarkdown;
