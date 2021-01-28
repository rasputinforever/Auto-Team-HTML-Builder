const Team = require("../lib/team");

describe("Team", () => {
  test('If name input for Team is null, sends back an empty object', () => {
    const testTeam = new Team("", "erik.portillo@test.com", "testgithub.com/test");

    const exp = {};
    
    const result = testTeam
   
    expect(result).toEqual(exp);
  });
  test('If email input for Team is null, sends back an empty object', () => {
    const testTeam = new Team("Erik Portillo", "", "testgithub.com/test");

    const exp = {};
    
    const result = testTeam
   
    expect(result).toEqual(exp);
  });
  test('If github input for Team is null, sends back an empty object', () => {
    const testTeam = new Team("Erik Portillo", "erik.portillo@test.com", "");

    const exp = {};
    
    const result = testTeam
   
    expect(result).toEqual(exp);
  });

  test('If email input for Team does not contain an "@" symbol, sends back an empty object', () => {
    const testTeam = new Team("Erik Portillo", "erik.portillo#test.com", "testgithub.com/test");

    const exp = {};
    
    const result = testTeam
   
    expect(result).toEqual(exp);
  });

  test('If github input for Team does not contain the word "github", regardless of case and location in the input string, sends back an empty object', () => {
    const testTeam = new Team("Erik Portillo", "erik.portillo@test.com", "testGitBub.com/test");

    const exp = {};
    
    const result = testTeam
   
    expect(result).toEqual(exp);
  });

  test('If all inputs fort Team are entered correctly, return a Team object with an empty array for Members', () => {
    const testTeam = new Team("Erik Portillo", "erik.portillo@test.com", "testGitHub.com/test");

    const exp = {
      name: 'Erik Portillo',
      contact: 'erik.portillo@test.com',
      git: 'testGitHub.com/test',
      members: []
    };
    
    const result = testTeam
   
    expect(result).toEqual(exp);
  });

  test('A new employee is added into the members array in Team object.', () => {
    const testTeam = new Team("Erik Portillo", "erik.portillo@test.com", "testGitHub.com/test");

    const testEmployee = {
      name : "Erik Portillo",
      contact : "Intern@Test.com",
      role : "Intern",
      roleProperty : 'School: ',
      rolePropertyVal : 'College of Test',
      memberHTML : `<test></test>`
    }

    testTeam.addMember(testEmployee);

    const exp = {
      name: 'Erik Portillo',
      contact: 'erik.portillo@test.com',
      git: 'testGitHub.com/test',
      members: [{
        name : "Erik Portillo",
        contact : "Intern@Test.com",
        role : "Intern",
        roleProperty : 'School: ',
        rolePropertyVal : 'College of Test',
        memberHTML : `<test></test>`
      }]
    };
    
    const result = testTeam
   
    expect(result).toEqual(exp);
  });


  });