const fs = require('fs');

function createHTML(team) {
    const teamName = team.name;
    const teamEmail = team.contact;

    let memberArr = [];
    

    team.members.forEach(member => {
        let memberHTML = `<section>
        <h2>Name: ${member.name}</h2>
        <p>Email: ${member.email}</p>
        <p>Title: ${member.title}</p>
        <p>Property: ${member.property}</p>
        </section>`;    
        memberArr.push(memberHTML);
    });

    const allMemberHTML = memberArr.join('\n')

    const myHTML = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${teamName}</title>
    </head>
    <body>
        ${allMemberHTML}
    </body>
    </html>`

    // write to file!
    fs.writeFile(`./output/${team.name}.html`, myHTML, (err) =>
        err ? console.error(err) : console.log(`HTML Created in Output Folder as ${team.name}.html!`)
    );
}

module.exports = createHTML;