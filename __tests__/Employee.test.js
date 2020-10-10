const { test, expect } = require("@jest/globals")
const Employee = require("../lib/Employee")
test('creates an enemy object', () => {
    const employee = new Employee('goblin', 1, 'email@email.com');
  
    expect(employee.getName()).toBe('goblin');
    expect(employee.getId()).toBe(1);
    expect(employee.getEmail()).toEqual('email@email.com');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
  });
 