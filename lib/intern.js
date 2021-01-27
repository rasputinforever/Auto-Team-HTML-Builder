function Intern(name, contact, role, roleProperty, rolePropertyVal) {
    // Input Checks here
    // no blank entries
    if (!name || !role || !contact) {
        console.log("Blank entries not permitted, please submit text on all prompts!")
        return;
    }
    // email must have an @ in it
    if (indexof(contact, '@') === -1) {
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
            <div class="card text-white bg-light mb-3" style="width: 18rem;">
                <div class="card-body">
                <h3 class="card-title">${name}</h3>          
                    <ul class="list-group">
                        <li class="list-group-item list-group-item-light">Title: ${role}</li>
                        <li class="list-group-item list-group-item-light">Email: ${contact}</li>
                        <li class="list-group-item list-group-item-light">${roleProperty}: ${rolePropertyVal}</li>
                    </ul>
                </div>
            </div>
        </section>`;    
}

module.exports = Intern;