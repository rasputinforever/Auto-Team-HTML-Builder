const fs = require('fs');

function createHTML(team) {
    //basic team elements defined
    const teamName = team.name;
    const teamEmail = team.contact;
    const teamGit = team.git;

    // here we loop through each team member and, using case, create a <section> for each. Specified formatting based on member title.
    let memberArr = [];    

    team.members.forEach(member => {
        // set formatting based on title
        let memberClass = '';
        let memberClassList = '';
            switch(member.title) {
                case 'Manager':
                    memberClass = `card text-white bg-primary mb-3`;
                    memberClassList = `list-group-item list-group-item-primary`;                    
                    break;
                case 'Developer':
                    memberClass = `card text-white bg-success mb-3`;
                    memberClassList = `list-group-item list-group-item-success`;     
                // code block
                break;
                case 'Intern':
                    memberClass = `card bg-light mb-3`;
                    memberClassList = `list-group-item list-group-item-light`;     
                // code block
                break;
                default:
                    memberClass = `card bg-light mb-3`;
                    memberClassList = `list-group-item list-group-item-light`;     
                // code block
            } 

        // the actual HTML block per member
        let memberHTML = `
        <section>
            <div class="${memberClass}" style="width: 18rem;">
                <div class="card-body">
                <h3 class="card-title">${member.name}</h3>          
                    <ul class="list-group">
                        <li class="${memberClassList}">Title: ${member.title}</li>
                        <li class="${memberClassList}">Email: ${member.email}</li>
                        <li class="${memberClassList}">${member.property}</li>
                    </ul>
                </div>
            </div>
        </section>`;    
        
        // push block into the array
        memberArr.push(memberHTML);
    });

    // merge the member array into a single string, jam it into the body of the HTML below
    const allMemberHTML = memberArr.join('\n')

    // HTML document contains CSS as to avoid having to send a CSS file along with...
    const myHTML = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <title>${teamName}</title>
            <style>
                #team-name {
                    font-size: 30px;
                }
                #git-team {
                    font-size: 24px;
                }
                section {
                    float: left;
                    padding: 25px;
                }
            </style>
    </head>
    <body>
    
    <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
        <a id="team-name" class="navbar-brand" href="${teamEmail}">${teamName}</a>
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a id="git-team" class="nav-link" href="${teamGit}">Team Git</a>
            </li>
        </ul>
    </nav>
        ${allMemberHTML}
    </body>
    </html>`

    // write to file!
    fs.writeFile(`./output/${team.name}.html`, myHTML, (err) =>
        err ? console.error(err) : console.log(`HTML Created in Output Folder as ${team.name}.html!`)
    );
}

module.exports = createHTML;