const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

 
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const output_path = path.join(OUTPUT_DIR, 'team.html');

const generatePage = require('./src/page-template');

const allTeamMembers = [];
const allIDs = [];

const chooseEmployee = () => {
    inquirer.prompt([
        {
            type: 'list',
            message: "What would you like to do?",
            choices: ['Add an engineer', 'Add an intern', 'Finish building my team'],
            name: 'choice',
            validate: choiceInput => {
                if (choiceInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
    ])
        .then((answers) => {
            console.log(answers)
            if(answers.choice == 'Add an engineer') {
                promptEngineer();
            } else if(answers.choice == 'Add an intern') {
                promptIntern();
            }
             else if(answers.choice == 'Finish building my team') {
                writePage();
                console.log("You're all done! Open 'team.html' to see your finished page.");
            }
        });
}

const promptManager = () => {

    console.log('Team Profile Generator')
    return inquirer.prompt([
        {
            type: 'input',
            message: "To start managing your team, please enter your full name.",
            name: 'name',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your full name!");
                    return false;
                }
            }
        },
        {
            type: 'number',
            message: "What is your employee ID?",
            name: 'mgrID',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter a valid ID.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: "What is your email address?",
            name: 'email',
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log("Please enter a valid email.");
                    return false;
                }
            }
        },
        {
            type: 'number',
            message: "What is your office number?",
            name: 'officenumber',
            validate: officenumberInput => {
                if (officenumberInput) {
                    return true;
                } else {
                    console.log("Please enter a valid office number.");
                    return false;
                }
            }
        },
    ])
    .then(data => {
        const manager = new Manager(data.name, data.mgrID, data.email, data.officenumber)
        allTeamMembers.push(manager)
        allIDs.push(data.id)
        chooseEmployee();
    })
    
};

//engineer
const promptEngineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is your engineers name?",
            name: 'engName',
            validate: engNameInput => {
                if(engNameInput) {
                    return true;
                } else {
                    console.log("Please enter a name.");
                    return false;
                }
            }
        },
        {
            type: 'number',
            message: "What is your engineers ID?",
            name: 'engID',
            validate: engIDInput => {
                if(engIDInput) {
                    return true;
                } else {
                    console.log("Please enter an ID.");
                }
            }
        },
        {
            type: 'input',
            message: "What is your engineers email?",
            name: 'engEmail',
            validate: engEmailInput => {
                if (engEmailInput) {
                    return true;
                } else {
                    console.log("Please enter an email.");
                }
            }
        },
        {
            type: 'input',
            message: "What is your engineers Github username?",
            name: 'engGithub',
            validate: engGithubInput => {
                if(engGithubInput) {
                    return true;
                } else {
                    console.log("Please enter a Github.");
                }
            }
        }
    ]).then(data => {
        const engineer = new Engineer(data.engName, data.engID, data.engEmail, data.engGithub)
        allTeamMembers.push(engineer)
        allIDs.push(data.engID)
        chooseEmployee();
    })
};

//intern
const promptIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is your interns name?",
            name: 'intName',
            validate: intNameInput => {
                if(intNameInput) {
                    return true;
                } else {
                    console.log("Please enter a name.");
                    return false;
                }
            }
        },
        {
            type: 'number',
            message: "What is your interns ID?",
            name: 'intID',
            validate: intIDInput => {
                if(intIDInput) {
                    return true;
                } else {
                    console.log("Please enter an ID.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: "what is your interns email?",
            name: 'intEmail',
            validate: intEmailInput => {
                if(intEmailInput) {
                    return true;
                } else {
                    console.log("Please enter an email.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: "What is your interns school?",
            name: 'intSchool',
            validate: intSchoolInput => {
                if(intSchoolInput) {
                    return true;
                } else {
                    console.log("Please enter a school.");
                    return false;
                }
            }
        }
    ]).then(data => {
        const intern = new Intern(data.intName, data.intID, data.intEmail, data.intSchool)
        allTeamMembers.push(intern)
        allIDs.push(data.intID)
        chooseEmployee();
    })
}



function writePage() {
    if (!fs.existsSync(OUTPUT_DIR)) {fs.mkdirSync(OUTPUT_DIR)}
    console.log(allTeamMembers)
    fs.writeFileSync(output_path, generatePage(allTeamMembers), 'UTF-8')
}

function init() {
    promptManager();
}

init();