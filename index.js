const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path')
const myFunctions = require('./src/generateHtml')

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

const filePath = path.join(__dirname, './dist/index.html');

const managerInput = () => {
inquirer
    .prompt([
        {
            type: 'input',
            message: "Please type team manager's name",
            name: 'managerName',
        },
        {
            type: 'input',
            message: "Please type team manager's employee ID",
            name: 'managerID',
        },
        {
            type: 'input',
            message: "Please type team manager's email adress",
            name: 'managerEmail',
        },
        {
            type: 'input',
            message: "Please type team manager's office number",
            name: 'managerOffice',
        },
        {
            type: 'list',
            message: "Do you want to add an engineer or an intern or finish buidling your team?",
            name: 'options',
            choices: ['Engineer', 'Intern', 'Finished'],
        }
    ])

    .then(data => {
        const manager = new Manager(data.managerName, data.managerID, data.managerEmail, data.managerOffice)

        fs.writeFile(filePath, myFunctions.generateHtmlManager(manager), (err) => {
            if (err) {
                console.log(err);
            }
        })

        if(data.options === 'Engineer') {
            engineerInput();
        }
        else if(data.options === 'Intern') {
            internInput();
        }
        else {
             fs.appendFile(filePath, myFunctions.generateHtmlEnd(), (err) => {
                if(err) {
                    console.log(err);
                }
            })
        }
    });
}

const engineerInput = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "Please type engineer's name",
                name: 'engineerName',
            },
            {
                type: 'input',
                message: "Please type engineer's ID",
                name: 'engineerID',
            },
            {
                type: 'input',
                message: "Please type engineer's email",
                name: 'engineerEmail',
            },
            {
                type: 'input',
                message: "Please type engineer's GitHub username",
                name: 'engineerGitHub',
            },
            {
                type: 'list',
                message: "Do you want to add an engineer or an intern or finish buidling your team?",
                name: 'options',
                choices: ['Engineer', 'Intern', 'Finished'],
            }
        ])

        .then(data => {
            const engineer = new Engineer(data.engineerName, data.engineerID, data.engineerEmail, data.engineerGitHub)

            fs.appendFileSync(filePath, myFunctions.generateHtmlEngineer(engineer), (err) => {
                if (err) {
                    console.log(err);
                }
            })
    
            if(data.options === 'Engineer') {
                engineerInput();
            }
            else if(data.options === 'Intern') {
                internInput();
            }
            else {
                 fs.appendFileSync(filePath, myFunctions.generateHtmlEnd(), (err) => {
                    if(err) {
                        console.log(err);
                    }
                })      
            }
        });
}

const internInput = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "Please type intern's name",
                name: 'internName',
            }, 
            {
                type: 'input',
                message: "Please type intern's ID",
                name: 'interID',
            },
            {
                type: 'input',
                message: "Please type intern's email",
                name: 'internEmail'
            },
            {
                type: 'input',
                message: "Please type intern's school",
                name: 'internSchool',
            },
            {
                type: 'list',
                message: "Do you want to add an engineer or an intern or finish buidling your team?",
                name: 'options',
                choices: ['Engineer', 'Intern', 'Finished'],
            }
        ])

        .then(data => {
            const intern = new Intern(data.internName, data.interID, data.internEmail, data.internSchool)

            fs.appendFileSync(filePath, myFunctions.generateHtmlIntern(intern), (err) => {
                if(err) {
                    console.log(err);
                }
            })
    
            if(data.options === 'Engineer') {
                engineerInput();
            }
            else if(data.options === 'Intern') {
                internInput();
            }
            else {
                 fs.appendFileSync(filePath, myFunctions.generateHtmlEnd(), (err) => {
                    if(err) {
                        console.log(err);
                    }
                })
            }
        });
}

managerInput();
