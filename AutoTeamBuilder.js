// main js that initiates this project

// use INQUIRER to GET information from user
    // Required Inputs (input series): get basic info about the team: Company Name, email, company git    
        // once inputs are in, create Team Object

    // Employee Types (choices): give options for additional Manager, Employee, Engineer, and Intern
        // Additional Info Prompt (input series): each Employee requires an Email, Git, and Name
            // send to Employee Creator: if it's missing info, send a message (fail). All are required.
            // send to Team Object, addEmployee();
        // then loop back to the Employee Type
        // this should loop forever until user selects "Finish"

    // each input creates a new Employee Object, each of which is inserted into a Team Object
        // {
        //     team-name: 'Fake Team',
        //     team-git: 'github.com/faketeam',
        //     team-email: 'john-smith@fake.com'
        //     employees: [{
        //         emp-title: 'Manager',
        //         emp-name: 'John Smith',
        //         emp-email: 'John.Smith@fake.com',
        //         emp-git: 'github.com/john-smith'
        //     },
        //     ...]
        // }

// Finish: create HTML based on the inputs. The page has a header bar. All employees, including managers, are displayed as cards in a grid

    // Create HTML code. Use a big block template. HTML can be stored as an ARRAY
        // htmlArr = ['0th should be everything <html> to <body>', ... , '</body> to </html>']
            // the "..." should be each employee card. 
                // for Each employee in TeamObject...
                    // create HTML card block
                        // either use templates per each employee type OR just use the employee-types as class names. May not need all these various htmlRendering templates
                    // insert into htmlArr
    
    // html shoudl be saved as "team-name.html" in a folder called "rendered pages"
        // check for duplicate: if a duplicate exists, PROMPT to Overwrite OR not
            // do not overwrite: give it a number (_1, _2) by counting number of files with the same name in the rendered folder
    

// require inquirer
// require TEAM
// require MEMBER


// inquirer.prompt(get team name)
// .then(
    // newTeam = new TEAM.createNew(team-name)
    // memberLooper();
// )
// 


// function memberLooper() {
    // prompt(team member name, arrRole.select)
    // .then (
        // if (member) {
        //     newMember = new MEMBER.create(response.name, response.role))
        //        newTeam.push(newMember)
        // } else {
        //     createHTML();
        // }
// }

const inquirer = require('inquirer')

// imports class constructors
const Member = require('./lib/member.js')
const Team = require('./lib/team.js')

function initTeamBuilder() {        
    const newTeam = new Team('Cool Team', 'team@team.com');
    newMemberInit(newTeam);
};

function newMemberInit(team) {
    inquirer.prompt([{
        name: 'name',
        type: 'input',
        message: 'What is this team member\'s name?'
    },{
        name: 'email',
        type: 'input',
        message: 'What is this team member\'s email??'
    }]).then((response) => {
        const newMember = new Member(response.name, response.email);
        newMember.getTitle(newMember, team);
    })
    
}

//this is looped within 'getTitle'
module.exports = newMemberInit;

initTeamBuilder();

// build test classes




