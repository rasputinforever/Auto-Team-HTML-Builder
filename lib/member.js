// start here, all the employee types could be done here with a CASE
    // each new team member will be sent with name, email, and "proprty 1"
        // manager: prop1, office
        // employee: prop1, git
        // intern: prop1, school

const inquirer = require('inquirer');


function Member(name, email) {
    // given info
    this.name = name;
    this.email = email;
}

Member.prototype.getTitle = function(member, team) {
    inquirer.prompt({
        name: "title",
        type: "list",
        message: `What is this team member's title?`,
        choices: ["Manager", "Developer", "Intern"],
    }).then((response) => {
        member.title = response.title;
        team.addMember(member);
        console.log(team);
    })
};



module.exports = Member;