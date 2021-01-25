// creates "member" class, then exports a variable prompt depending on the Title given

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

function getProperty(member, team, response){
        
    const newMemberInit = require('../AutoTeamBuilder')
    
    const titlePropArr = [{title: "Manager", property: "Office Number"},{title: "Developer", property: "GitHub Profile"},{title: "Intern", property: "School Name"}];

    let titleObj = titlePropArr.find(obj => obj.title === response.title);

    inquirer.prompt([{
        name: "titleProperty",
        type: "input",
        message: `What is this team member's ${titleObj.property}?`
    }]).then((response) => {
        member.property = response.titleProperty;
        team.addMember(member);
        console.log(team);
        newMemberInit(team);
    })
}

module.exports = Member;