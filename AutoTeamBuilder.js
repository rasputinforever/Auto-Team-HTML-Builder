//MVP To-Dos
    // validations in inquirer: do NOT allow blank entries for any entry, all must be filled!
    // validations in inquirer: all EMAIL and LINK inputs MUST be with a "@" symbol, git pages have the word "git" and "." in the input string

    // getTitle and getProperty... is it possible to put these within the constructors themselves? So far the constructor does not wait for inquiry inputs, rendering it useless. Will ge advice on this and try again.

    //JEST tests! Kind of relates to the above, but can't JEST also test normal functions? If I can test anything... then maybe it's moot to jam the inquirer prompts into the constructors, I should just test each thing, each member and member element validations work, team works, and can we test the HTML? Check that it.. outputs HTML at all!

// nps
const inquirer = require('inquirer')

// imports class constructors
const Member = require('./lib/member.js')
const Team = require('./lib/team.js')

// program starts here
function initTeamBuilder() {    
    // ask for team info, then create the team, then move to adding members (always going to make at least one member): 
    console.log('Creating the Team...')
    inquirer.prompt([{
        name: 'name',
        type: 'input',
        message: 'What is this team\'s name?'
    },{
        name: 'email',
        type: 'input',
        message: 'What is this team\'s email?'
    },{
        name: 'git',
        type: 'input',
        message: 'What is this team\'s git page?'
    }]).then((response) => {    
        const newTeam = new Team(response.name, response.email);
        console.log('Your First Team Member...')
        newMemberInit(newTeam);
    })
};

// looped function. The "end" of this functionality asks if the user wants to continue or not
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

// tells script to GO
initTeamBuilder();