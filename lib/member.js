// creates "member" class, then exports a variable prompt depending on the Title given

// listen, I read the README for this project and I understand we want to create all these disperate classes for each of the various team members, but if I can consolidate them into a single class, why not? So long as I test (with jest) for each variable and (eventually) add rules for each of these inputs... do I really need to have four nearly-identical class files? I accept the L if that's the case, but right here is something I think is both efficient AND easy to add in more "member types".

// inquirer requires knowing how to wrangle async. Right now, I can't. The pathway is linear. If I inject "get" into the constructor I get problems with async issues. I will work on that later.

const inquirer = require('inquirer');

function Member(name, email) {
    // given info
    this.name = name;
    this.email = email;
}

Member.prototype.getTitle = function(member, team) {
    inquirer.prompt([{
        name: "title",
        type: "list",
        message: `What is this team member's title?`,
        choices: ["Manager", "Developer", "Intern"],
    }]).then((response) => {
        member.title = response.title;
        getProperty(member, team, response)
    })
};

// this is the "cheater" get property. It is NOT in the class constructor, not technically, since it's not set up to "wait" for inquirer when it sits within the constructor. QUITE annoying!
function getProperty(member, team, response){
        
    const newMemberInit = require('../AutoTeamBuilder');
    const createHTML = require('./htmlBuilder');
    
    const titlePropArr = [{title: "Manager", property: "Office Number"},{title: "Developer", property: "GitHub Profile"},{title: "Intern", property: "School Name"}];

    let titleObj = titlePropArr.find(obj => obj.title === response.title);

    inquirer.prompt([{
        name: "titleProperty",
        type: "input",
        message: `What is this team member's ${titleObj.property}?`
    },{
        name: "cont",
        type: "list",
        message: `Do you want to add another memeber?`,
        choices: ["Yes", "No, Create HTML..."],
    }]).then((response) => {
        member.property = `${titleObj.property}: ${response.titleProperty}`;
        team.addMember(member);
        if (response.cont === 'Yes') {
            console.log('Additional Team Member...')
            newMemberInit(team);
        } else {
            // send to HTML builder...
            console.log(team);
            createHTML(team);
        }
    })
}

module.exports = Member;