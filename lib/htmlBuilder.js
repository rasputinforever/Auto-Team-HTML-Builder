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
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a id="team-name" class="navbar-brand">${teamName}</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
        <a id="git-team" class="nav-link" href="${teamGit}">Team GitHub</a>
        <a id="git-email" class="nav-link" href="${teamEmail}">Team Email</a>
    </div>
    </div>
    </nav>

        ${allMemberHTML}
    </body>
    
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    </html>`

    // write to file!
    fs.writeFile(`./output/${team.name}.html`, myHTML, (err) =>
        err ? console.error(err) : console.log(`HTML Created in Output Folder as ${team.name}.html!`)
    );
}

module.exports = createHTML;