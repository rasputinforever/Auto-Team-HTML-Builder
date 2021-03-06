function Intern(name, role, contact, roleProperty, rolePropertyVal) {
    // Input Checks here
    // no blank entries
    if (!name || !role || !contact || !rolePropertyVal) {
        console.log("Blank entries not permitted, please submit text on all prompts!")
        return;
    }
    // email must have an @ in it
    if (!contact.includes('@')) {
        console.log("Email must be in correct format (username@domain.example)")
        return;
    }
    // given info
    this.name = name;
    this.contact = contact;
    this.role = role;
    this.roleProperty = roleProperty;
    this.rolePropertyVal = rolePropertyVal;
    this.memberHTML = `
        <section>
            <div class="card text-white bg-warning mb-3" style="width: 18rem;">
                <div class="card-body">
                <h3 class="card-title">${name}</h3>          
                    <ul class="list-group">
                        <li class="list-group-item list-group-item-warning">Title: ${role}</li>
                        <li class="list-group-item list-group-item-warning">Email: ${contact}</li>
                        <li class="list-group-item list-group-item-warning">${roleProperty}: ${rolePropertyVal}</li>
                    </ul>
                </div>
            </div>
        </section>`;    
}

module.exports = Intern;