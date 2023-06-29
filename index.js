// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is your Application name? (Project title)",
        name: 'appName'
    },
    {
        type: 'input',
        message: "Can you describe how does this application work? (Description)",
        name: 'description',
    },
    {
        type: 'input',
        message: "Can you describe how to install the application? (installation)",
        name: 'installation',
    },
    {
        type: 'input',
        message: "Can you describe how to use the application? (usage)",
        name: 'usage',
    },
    {
        type: 'list',
        message: "Which license are you use in this project? (license)",
        name: 'license',
        choices: ['MIT', 'GPLv2', 'Apache', 'GPLv3', 'Unlicense'],
    },
    {
        type: 'input',
        message: "Please describe the Contribution in this README file:",
        name: 'contribution',
    },
    {
        type: 'input',
        message: "Do you want to have tests in this README file? If yes, please write down :",
        name: 'test',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your Phone number?',
        name: 'phone',
    },
];

function generateReadme(answers) {
    const licenseBadge =
        `![License](https://img.shields.io/badge/License-${encodeURIComponent(answers.license)}-brightgreen)`;
    const tableOfContents =
        `## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
`;
    const readmeContent =
        `# ${answers.appName}

${tableOfContents}

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This application is covered under the ${answers.license} license.
${licenseBadge}

## Contributing
${answers.contribution}

## Tests
${answers.test}

## Questions
For all the questions you have, you can reach me by:

- GitHub: [${answers.github}](https://github.com/${answers.github})
- Email: [${answers.email}](mailto:${answers.email})
- Phone: [${answers.phone}](tel:${answers.phone})
`;

    return readmeContent;
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Generated Readme.md file!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const generate = generateReadme(answers);

            writeToFile('README.md', generate);
        });
}

// Function call to initialize app
init();
