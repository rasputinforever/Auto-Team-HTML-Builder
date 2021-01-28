const Intern = require("../lib/Intern");

describe("Intern", () => {
  test('If name input for Intern is null, sends back an empty object', () => {
    const testIntern = new Intern("", "Intern", "erik.portillo@test.com", "School Name", "University of Test");

    const exp = {};
    
    const result = testIntern
   
    expect(result).toEqual(exp);
  });
  test('If email input for Intern is null, sends back an empty object', () => {
    const testIntern = new Intern("Erik Portillo", "Intern", "", "School Name", "University of Test");

    const exp = {};
    
    const result = testIntern
   
    expect(result).toEqual(exp);
  });
  test('If School Name input for Intern is null, sends back an empty object', () => {
    const testIntern = new Intern("Erik Portillo", "Intern", "erik.portillo@test.com", "School Name", "");

    const exp = {};
    
    const result = testIntern
   
    expect(result).toEqual(exp);
  });

  test('If email input for Intern does not contain an "@" symbol, sends back an empty object', () => {
    const testIntern = new Intern("Erik Portillo", "Intern", "erik.portillo#test.com", "School Name", "University of Test");

    const exp = {};
    
    const result = testIntern
   
    expect(result).toEqual(testIntern);
  });

  test('If all inputs for Intern are entered correctly, return a Intern object with an HTML String', () => {
    const testIntern = new Intern("Erik Portillo", "Intern", "erik.portillo@test.com", "School Name", "University of Test");
    

    const exp = {
      contact: "erik.portillo@test.com",
      memberHTML: `
        <section>
            <div class="card text-white bg-light mb-3" style="width: 18rem;">
                <div class="card-body">
                <h3 class="card-title">Erik Portillo</h3>          
                    <ul class="list-group">
                        <li class="list-group-item list-group-item-light">Title: Intern</li>
                        <li class="list-group-item list-group-item-light">Email: erik.portillo@test.com</li>
                        <li class="list-group-item list-group-item-light">School Name: University of Test</li>
                    </ul>
                </div>
            </div>
        </section>`,      
      name: "Erik Portillo",
      role: "Intern",
      roleProperty: 'School Name',
      rolePropertyVal: 'University of Test',

    };
    
    const result = testIntern
   
    expect(result).toEqual(exp);
  });

  });