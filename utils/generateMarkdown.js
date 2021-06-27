// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
    'Unlicense': '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)',
    'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'GNU GPLv3': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    'AGPLv3': '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)',
    'Apache 2.0': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }
  if (!license) {
    return '';
  } else {
    return badges[license];
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  } else {
    return `Licensed under the [${license}](LICENSE.txt) license`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  } else {
    return`
## License

${renderLicenseLink(license)}
`
  }
}

// Create functions for rendering the other sections
function renderInstallationSection(input) {
  if(!input.confirmInstall){
    return '';
  } else {
    return`
## Installation

${input.installation}
`
  }
}

function renderUsageSection(input) {
  if(!input.confirmUsage){
    return '';
  } else {
    return`
## Usage

${input.usage}
`
  }
}

function renderContributeSection(input) {
  if(!input.confirmContribute){
    return '';
  } else {
    return`
## Contributing

${input.contribute}
`
  }
}

function renderTestsSection(input) {
  if(!input.confirmContribute){
    return '';
  } else {
    return`
## Tests

${input.tests}
`
  }
}

function renderQuestionsSection(input) {
  if(!input.confirmQuestions){
    return '';
  } else {
    return`
## Question

If you have any questions regarding this project please contact me
[My GitHub](https://github.com/${input.userName})
Email: <${input.email}>
`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {license, ...input} = data; 
  console.log('license',license);
  console.log('input',input);
  return `
# ${input.title}
${renderLicenseBadge(license)}

## Description

${input.description}
${renderInstallationSection(input)}
${renderUsageSection(input)}
${renderContributeSection(input)}
${renderTestsSection(input)}
${renderLicenseSection(license)}
${renderQuestionsSection(input)}
`;
}

module.exports = generateMarkdown;
