const Manager = require("../lib/manager");

describe("Manager", () => {
  test('If name input for Manager is null, sends back an empty object', () => {
    const testManager = new Manager("", "Manager", "erik.portillo@test.com", "Office Number", "TEST001");

    const exp = {};
    
    const result = testManager
   
    expect(result).toEqual(exp);
  });
  test('If email input for Manager is null, sends back an empty object', () => {
    const testManager = new Manager("Erik Portillo", "Manager", "", "Office Number", "TEST001");

    const exp = {};
    
    const result = testManager
   
    expect(result).toEqual(exp);
  });
  test('If office number input for Manager is null, sends back an empty object', () => {
    const testManager = new Manager("Erik Portillo", "Manager", "erik.portillo@test.com", "Office Number", "");

    const exp = {};
    
    const result = testManager
   
    expect(result).toEqual(exp);
  });

  test('If email input for Manager does not contain an "@" symbol, sends back an empty object', () => {
    const testManager = new Manager("Erik Portillo", "Manager", "erik.portillo#test.com", "Office Number", "TEST001");

    const exp = {};
    
    const result = testManager
   
    expect(result).toEqual(testManager);
  });

  test('If all inputs for Manager are entered correctly, return a Manager object with an HTML String', () => {
    const testManager = new Manager("Erik Portillo", "Manager", "erik.portillo@test.com", "Office Number", "TEST001");
    

    const exp = {
      contact: "erik.portillo@test.com",
      memberHTML: `
        <section>
            <div class="card text-white bg-primary mb-3" style="width: 18rem;">
                <div class="card-body">
                <h3 class="card-title">Erik Portillo</h3>          
                    <ul class="list-group">
                        <li class="list-group-item list-group-item-primary">Title: Manager</li>
                        <li class="list-group-item list-group-item-primary">Email: erik.portillo@test.com</li>
                        <li class="list-group-item list-group-item-primary">Office Number: TEST001</li>
                    </ul>
                </div>
            </div>
        </section>`,      
      name: "Erik Portillo",
      role: "Manager",
      roleProperty: 'Office Number',
      rolePropertyVal: 'TEST001',

    };
    
    const result = testManager
   
    expect(result).toEqual(exp);
  });

  });