// start here, all the employee types could be done here with a CASE
    // each new team member will be sent with name, email, and "proprty 1"
        // manager: prop1, office
        // employee: prop1, git
        // intern: prop1, school

function Member(name, email) {
    
    this.name = name;
    this.email = email;
}
    
module.exports = Member;