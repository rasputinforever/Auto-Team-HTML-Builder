// all team member building occurs here. Cascading .thens on inquiries allow this to function and flow accordingly. Callbacks allow the loop to have end-points and appropriate directing to repeat inputs for errors.

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
function newManager(team) {
    console.log("Step 2: Let's determine who the manager is for this team!")
    inquirer.prompt([{
        name: 'manager',
        type: 'input',
        message: 'What is this team\'s manager\'s name?'
    }]).then((response) => {
        // create manager
        const empName = response.manager;
        const empTitle = 'Manager';
        newMemberInit(empName, empTitle, team);        
    })    
}

// this is where all employees feed into after title selection OR after the manager is set
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
    
    // each employee has different properties depending on the given role
    const rolePropArr = [
        {role: "Manager", 
        property: "Office Number"},
        {role: "Engineer", 
        property: "GitHub Profile"},
        {role: "Intern", 
        property: "School Name"}
    ];

    // find and set those unique properties
    let roleObj = rolePropArr.find(obj => obj.role === role);

    inquirer.prompt([{
        name: "titleProperty",
        type: "input",
        message: `What is ${name}'s ${roleObj.property}?`
    }]).then((response) => {     
        let newEmp = {};
        // create new employee based on all given properties. There will be "validations" added here.
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

        //check for returned errors... convert object to JSON makes it easier to check
        if (JSON.stringify(newEmp) === `{}` && role === 'Manager') {
            // fail on manager requires a special exception
            console.log("Error creating manager... please be sure to fill all entries correctly and try again...")
            newManager(team);
        } else if (newEmp === {}) {
            console.log("Error creating employee... please be sure to fill all entries correctly and try again...")
            getTitle(team);
        } else {
            team.addMember(newEmp);
            console.log(`${name} added to team!`)  
            endCheck(team);      
        }        
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
            createHTML(team);
        }
    })
}

module.exports = newManager;