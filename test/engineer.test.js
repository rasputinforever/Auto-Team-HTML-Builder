const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  test('If name input for Engineer is null, sends back an empty object', () => {
    const testEngineer = new Engineer("", "Engineer", "erik.portillo@test.com", "GitHub Profile", "GitHub.com/Test");

    const exp = {};
    
    const result = testEngineer
   
    expect(result).toEqual(exp);
  });
  test('If email input for Engineer is null, sends back an empty object', () => {
    const testEngineer = new Engineer("Erik Portillo", "Engineer", "", "GitHub Profile", "GitHub.com/Test");

    const exp = {};
    
    const result = testEngineer
   
    expect(result).toEqual(exp);
  });
  test('If GitHub Profile input for Engineer is null, sends back an empty object', () => {
    const testEngineer = new Engineer("Erik Portillo", "Engineer", "erik.portillo@test.com", "GitHub Profile", "");

    const exp = {};
    
    const result = testEngineer
   
    expect(result).toEqual(exp);
  });

  test('If email input for Engineer does not contain an "@" symbol, sends back an empty object', () => {
    const testEngineer = new Engineer("Erik Portillo", "Engineer", "erik.portillo#test.com", "GitHub Profile", "GitHub.com/Test");

    const exp = {};
    
    const result = testEngineer
   
    expect(result).toEqual(testEngineer);
  });

  test('If github input for Engineer does not contain the word "github", regardless of case and location in the input string, sends back an empty object', () => {
    const testEngineer = new Engineer("Erik Portillo", "Engineer", "erik.portillo@test.com", "GitHub", "gitBOB.com/gitTest");

    const exp = {};
    
    const result = testEngineer
   
    expect(result).toEqual(exp);
  });

  test('If all inputs for Engineer are entered correctly, return a Engineer object including HTML string.', () => {
    const testEngineer = new Engineer("Erik Portillo", "Engineer", "erik.portillo@test.com", "GitHub Profile", "gitHub.com/gitTest");
    

    const exp = {
      contact: "erik.portillo@test.com",
      memberHTML: `
        <section>
            <div class="card text-white bg-success mb-3" style="width: 18rem;">
                <div class="card-body">
                <h3 class="card-title">Erik Portillo</h3>          
                    <ul class="list-group">
                        <li class="list-group-item list-group-item-success">Title: Engineer</li>
                        <li class="list-group-item list-group-item-success">Email: erik.portillo@test.com</li>
                        <li class="list-group-item list-group-item-success">GitHub Profile: gitHub.com/gitTest</li>
                    </ul>
                </div>
            </div>
        </section>`,      
      name: "Erik Portillo",
      role: "Engineer",
      roleProperty: 'GitHub Profile',
      rolePropertyVal: 'gitHub.com/gitTest',

    };
    
    const result = testEngineer
   
    expect(result).toEqual(exp);
  });

  });