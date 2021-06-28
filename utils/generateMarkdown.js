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
    return `
Licensed under the [${license}](LICENSE.txt) license`
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

function renderTableOfContents(input) {
  if (input.toGenerate.includes('Installation')){
    var inst = `* [Installation](#installation)`;
  } else {
    var inst = ``;
  }
  if (input.toGenerate.includes('Usage')){
    var use = `* [Usage](#usage)`;
  } else {
    var use = ``;
  }
  if (input.toGenerate.includes('Contributing')){
    var cont = `* [Contributing](#contributing)`;
  } else {
    var cont = ``;
  }
  if (input.toGenerate.includes('Tests')){
    var test = `* [Tests](#tests)`;
  } else {
    var test = ``;
  }
  if (input.toGenerate.includes('License')){
    var lice = `* [License](#license)`;
  } else {
    var lice = ``;
  }
  if (input.toGenerate.includes('Questions')){
    var ques = `* [Questions](#questions)`;
  } else {
    var ques = ``;
  }
  return `
  ## Table of Contents
  ${inst}
  ${use}
  ${cont}
  ${test}
  ${lice}
  ${ques}
  `
}

// Create functions for rendering the other sections
function renderInstallationSection(input) {
  if(!input.toGenerate.includes('Installation')){
    return '';
  } else {
    return`

## Installation

${input.installation}
`
  }
}

function renderUsageSection(input) {
  if(!input.toGenerate.includes('Usage')){
    return '';
  } else {
    return`
## Usage

${input.usage}
`
  }
}

function renderContributeSection(input) {
  if(!input.toGenerate.includes('Contributing')){
    return '';
  } else {
    return`
## Contributing

${input.contribute}
`
  }
}

function renderTestsSection(input) {
  if(!input.toGenerate.includes('Tests')){
    return '';
  } else {
    return`
## Tests

${input.tests}
`
  }
}

function renderQuestionsSection(input) {
  if(!input.toGenerate.includes('Questions')){
    return '';
  } else {
    return`
## Questions

[My GitHub](https://github.com/${input.userName})

Email: <${input.email}>
`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {license, ...input} = data; 
  return `
# ${input.title}
${renderLicenseBadge(license)}

## Description

${input.description}
${renderTableOfContents(input)}

${renderInstallationSection(input)}${renderUsageSection(input)}${renderContributeSection(input)}${renderTestsSection(input)}${renderLicenseSection(license)}${renderQuestionsSection(input)}
`;
}

module.exports = generateMarkdown;
