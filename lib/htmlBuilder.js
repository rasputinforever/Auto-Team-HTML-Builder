// build HTML and save to OUTPUT folder. HTML uses Team Name.

const fs = require('fs');

function createHTML(team) {
    //basic team elements defined
    const teamName = team.name;
    const teamEmail = team.contact;
    const teamGit = team.git;

    // here we loop through each team member and, using case, create a <section> for each. Specified formatting based on member title.
    let memberArr = [];    

    team.members.forEach(member => {
        // push block into the array
        memberArr.push(member.memberHTML);
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
                #git-email {
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
        <a id="team-name" class="navbar-brand">${teamName}</a>
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a id="git-team" class="nav-link" href="${teamGit}">Team GitHub</a>
            </li>
            <li class="nav-item active">
                <a id="git-email" class="nav-link" href="${teamEmail}">Team Email</a>
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