//MVP To-Dos
    // validations in inquirer: do NOT allow blank entries for any entry, all must be filled!
    // validations in inquirer: all EMAIL and LINK inputs MUST be with a "@" symbol, git pages have the word "git" and "." in the input string

    // getTitle and getProperty... is it possible to put these within the constructors themselves? So far the constructor does not wait for inquiry inputs, rendering it useless. Will ge advice on this and try again.

    //JEST tests! Kind of relates to the above, but can't JEST also test normal functions? If I can test anything... then maybe it's moot to jam the inquirer prompts into the constructors, I should just test each thing, each member and member element validations work, team works, and can we test the HTML? Check that it.. outputs HTML at all!

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