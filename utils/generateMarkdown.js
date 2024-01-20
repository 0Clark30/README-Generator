const licensesDetails = require('./licensesDetails.js')

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "None") {
    return ``;
  }
  let result = licensesDetails.filter(licenseDetail => licenseDetail.name == license);
  return result[0].badge;
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "None") {
    return ``;
  }
  let result = licensesDetails.filter(licenseDetail => licenseDetail.name == license);;
  return result[0].link;
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "None") {
    return ``;
  }
  return `## License
  This application is licensed under [${license}](${renderLicenseLink(license)}) license. Click the link for license rights and limitations.`;
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {



  return `
  # ${data.title}
  

  ## Description
  
  ${data.description}
  
  
  ## Table of Contents (Optional)
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  
 ${data.installation}
  
  ## Usage
  
  [Deployed](${data.deployedLink})
  [Github](${data.githubLink})
  
  To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
  
      md
      ![alt text](assets/images/screenshot.png)
      
  
  ## Credits
  
 ${data.credits}

  
  ## License
  ${renderLicenseSection(data.license)}
  
  
  🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
  
  ## Badges

  ${renderLicenseBadge(data.license)}
  
  
  ## Features
  
  ${data.features}
  
  ## How to Contribute
  
  ${data.contribute}
  
  ## Tests
  ${data.tests}
`;
}

module.exports = generateMarkdown;
