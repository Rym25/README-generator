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
  console.log('license in badge function',license);
  if (!license) {
    console.log('license was false')
    return '';
  } else {
    console.log('license was true')
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
${renderLicenseSection(license)}
  `;
}

module.exports = generateMarkdown;
