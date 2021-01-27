// npm
const inquirer = require('inquirer');

// classes
const Manager = require('./manager.js')
const Engineer = require('./engineer.js')
const Intern = require('./intern.js')

// function imports
const createHTML = require('./htmlBuilder.js');

// this is where members beyond Manager are called back to
function getTitle(team) {
    inquirer.prompt([{
        name: "name",
        type: "input",
        message: `What is this team member's name?`
    },{
        name: "role",
        type: "list",
        message: `What is this team member's title?`,
        choices: ["Engineer", "Intern"],
    }]).then((response) => {
        newMemberInit(response.name, response.role, team)
    })
};

// this is where the INITIAL function flow starts, but is 2nd on any additional members
function newMemberInit(name, role, team) {
    inquirer.prompt([{
        name: 'email',
        type: 'input',
        message: `What is ${name}'s email?`
    }]).then((response) => {
        const empEmail = response.email;
        getProperty(name, role, empEmail, team)
    })    
}

// this is a dynamic getter of ROLE properties AND where we finalize the creation of a new emplooyee and push it into the team.
function getProperty(name, role, email, team){    
    
    const rolePropArr = [
        {role: "Manager", 
        property: "Office Number"},
        {role: "Engineer", 
        property: "GitHub Profile"},
        {role: "Intern", 
        property: "School Name"}
    ];

    let roleObj = rolePropArr.find(obj => obj.role === role);
    console.log(roleObj);
    inquirer.prompt([{
        name: "titleProperty",
        type: "input",
        message: `What is ${name}'s ${roleObj.property}?`
    }]).then((response) => {     
        let newEmp = {};
        switch (role) {
            case 'Manager':
                newEmp = new Manager(name, role, email, roleObj.property, response.titleProperty)
                break;
            case 'Engineer':
                newEmp = new Engineer(name, role, email, roleObj.property, response.titleProperty)
                break;
            case 'Intern':
                newEmp = new Intern(name, role, email, roleObj.property, response.titleProperty)
                break;
            default:
                console.log('Something went wrong... try again!')
                break;
        }
        
        team.addMember(newEmp);
        console.log("Team Member Added!")  
        endCheck(team);      
    })
}

// switcher that allows more members OR goto HTML builder
function endCheck(team) {
    inquirer.prompt({
        name: 'endCheck',
        type: 'list',
        message: 'Please choose one of the following options...',
        choices: ['Create Another Employee', 'End and Create HTML...']
    }).then(response => {
        if (response.endCheck === 'Create Another Employee') {
            getTitle(team);
        } else {
            // send to HTML builder...
            console.log("Creating HTML Now...");
            console.log(team);
            // createHTML(team);
        }
    })
}

module.exports = newMemberInit;