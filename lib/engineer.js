function Engineer(name, role, contact, roleProperty, rolePropertyVal) {
    // Input Checks here
        // no blank entries
        if (!name || !role || !contact) {
            console.log("Blank entries not permitted, please submit text on all prompts!")
            return;
        }
        // email must have an @ in it
        if (!contact.includes('@')) {
            console.log("Email must be in correct format (username@domain.example)")
            return;
        }
        // git must have a "github" in the string
        if (!rolePropertyVal.toLowerCase().includes('github')) {
            console.log("Team must have a GitHub!")
            return;
        }
        
    // constructor
    this.name = name;
    this.contact = contact;
    this.role = role;
    this.roleProperty = roleProperty;
    this.rolePropertyVal = rolePropertyVal;
    this.memberHTML = `
        <section>
            <div class="card text-white bg-success mb-3" style="width: 18rem;">
                <div class="card-body">
                <h3 class="card-title">${name}</h3>          
                    <ul class="list-group">
                        <li class="list-group-item list-group-item-success">Title: ${role}</li>
                        <li class="list-group-item list-group-item-success">Email: ${contact}</li>
                        <li class="list-group-item list-group-item-success">${roleProperty}: ${rolePropertyVal}</li>
                    </ul>
                </div>
            </div>
        </section>`;    
}

module.exports = Engineer;