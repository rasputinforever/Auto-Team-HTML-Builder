function Team(name, contact, git) {
    // error checks
        // no blank entries
        if (!name || !git || !contact) {
            console.log("Blank entries not permitted, please submit text on all prompts!")
            return;
        }
        // email must have an @ in it
        if (!contact.includes('@')) {
            console.log("Email must be in correct format (username@domain.example)")
            return;
        }
        // git must have a "github" in the string
        if (!git.toLowerCase().includes('github')) {
            console.log("Team must have a GitHub!")
            return;
        }

    // given info
    this.name = name;
    this.contact = contact;
    this.git = git;
    this.members = [];
}

Team.prototype.addMember = function(member) {
    // Add the child to the `children` array if we made it this far
    this.members.push(member);
};
    
module.exports = Team;