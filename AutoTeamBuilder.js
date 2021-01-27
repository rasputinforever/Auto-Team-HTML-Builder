//MVP To-Dos
 // jest tests

// nps
const inquirer = require('inquirer')

// imports class constructors
const Team = require('./lib/team.js')

// imports module functions
const newManager = require('./lib/member.js');

// program starts here
function initTeamBuilder() {    
    // ask for team info, then create the team, then move to adding members (always going to make at least one member): 
    console.log('Initiating Auto Team HTML Generator...')
    inquirer.prompt([{
        name: 'name',
        type: 'input',
        message: 'Step 1: Let\'s first build our team: What is this team\'s name?'
    },{
        name: 'email',
        type: 'input',
        message: 'What is this team\'s email?'
    },{
        name: 'git',
        type: 'input',
        message: 'What is this team\'s git page?'
    }]).then((response) => {    
        // create team        
        const newTeam = new Team(response.name, response.email, response.git);

        //check for returned errors... convert object to JSON makes it easier to check
        if (JSON.stringify(newTeam) === `{}`) {
            // fail on manager requires a special exception
            console.log("Error creating team... please be sure to fill all entries correctly and try again...")
            initTeamBuilder();
        } else {
            // goto Manager Creator
            newManager(newTeam)  
        }    

    })
};

// tells script to GO
initTeamBuilder();