function Engineer(name, contact, role, roleProperty, rolePropertyVal) {
    // given info
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