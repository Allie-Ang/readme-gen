// Creates a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "NONE") {
    return ` ![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}



// Creates a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "NONE") {
    return `## License \n This project is licensed under the ${license} license.`;
  }
  return "";
}

// Creates a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description 
  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributions
  ${data.contributions}

  ## Tests
  ${data.test}

  ## Questions
  If you have any questions, email me at ${data.email}
  To see more of my work, go to [${data.GitHub}](https://github.com/${
    data.GitHub
  })
`;
}

module.exports = generateMarkdown;
