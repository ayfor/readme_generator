// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "[None]"){
    return '';
  }else{
    switch (license) {
      case 'Apache 2.0':
        return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        break;

      case 'GNU GPL v3':
        return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
        break;

      case 'MIT':
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
        break;

      case 'Mozilla Public License 2.0':
        return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
        break;
      
      case '[None]':
        return '';
        
      default:
        break;
    }
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "[None]"){
    return '';
  }else{
    switch (license) {
      case 'Apache 2.0':
        return 'https://choosealicense.com/licenses/apache-2.0/';
        break;
  
      case 'GNU GPL v3':
        return 'https://choosealicense.com/licenses/gpl-3.0/';
        break;
  
      case 'MIT':
        return 'https://choosealicense.com/licenses/mit/'
        break;
  
      case 'Mozilla Public License 2.0':
        return 'https://choosealicense.com/licenses/mpl-2.0/'
        break;
      default:
        break;
    }
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if(license === "[None]"){
    return '';
  }else{
    
    return `### License: <br />  ${renderLicenseBadge(license)} <br /> This application is developed and distributed under the ${license} license. More information of this license can be found by clicking [here](${renderLicenseLink(license)}).`;
    
  }
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) =>
  `
  # ${data.title}

  ## Table of Contents
  
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Description](#description)
  5. [Contributing](#contributing)
  6. [Tests](#Tests)
  7. [Questions](#questions)
  

  ${renderLicenseSection(data.license)}


  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## Questions

  For questions please feel free to reach out through my [Github Profile](https://github.com/${data.name})!

  Additionally, reach me by email at <${data.email}>!
  
  `;
                          


module.exports = generateMarkdown;
