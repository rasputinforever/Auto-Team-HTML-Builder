// start here, all the employee types could be done here with a CASE
    // each new team member will be sent with name, email, and "proprty 1"
        // manager: prop1, office
        // employee: prop1, git
        // intern: prop1, school


function Member(name, email, role) {    
    this.name = name;
    this.email = email;
    this.role = role;    

    // Get Role Property
    get property() {
        return this.roleProp();
    }

    // variable message depending on role selected
    const propOptions = [{
        role: 'Manager',
        message: 'What is this manager\'s office number?'
    },{
        role: 'Employee',
        message: 'What is this employee\'s github page url?'
    },{
        role: 'Intern',
        message: 'What is this intern\'s school name?'
    }]

    // prompt to get property
    roleProp() {
        const roleObj = Array.find(obj => obj.role === this.role)
        inpurirer.prompt({
            name: 'roleProperty',
            type: 'choices',
            message: roleObj.message,
            choices: ['Manager']
        }).then((response) =>
            return response;
        )        
    }
}   


module.exports = Member;