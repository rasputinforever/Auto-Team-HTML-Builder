const inquirer = require('inquirer')

function Team(name, contact) {
    // given info
    this.name = name;
    this.contact = contact;
    this.members = [];
}


Team.prototype.addMember = function(member) {
  
    // Add the child to the `children` array if we made it this far
    this.members.push(member);
};
    
module.exports = Team;