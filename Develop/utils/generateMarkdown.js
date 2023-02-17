// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === `None`){
    return 
  }
  if (license === `APACHE 2.O`){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  if (license === `BSD 3`){
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  }
  if (license === `GVL-GPL 3.0`){
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
  if (license === `MIT`){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== `None`){
    return ` - [License](#license)`
  }
  else{
    return
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== `None`){
    return `## License
    This project is licenced under ${license} Lincense`
  }
  else{
    return
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license[0])}
  ## Table of Content
  - [Project description](#Description)
  - [Installation](#installation)
  - [Usage](#usage)
  ${renderLicenseLink(data.license)}
  - [Test](#test)
  - [Credit](#credit)
  - [Contributing](#Contributing)
  - [Question](#Question)
 


  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Test
  ${data.test}

  ## Credit
  ${data.credit}

  ## Contributing
  ${data.contributing}

  ## License
  ${data.license}

  ## Question
  ${data.github}
  ${data.email}


`;
}

module.exports = generateMarkdown;
