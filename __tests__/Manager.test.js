const { test, expect } = require("@jest/globals")
const Manager = require("../lib/Manager")
test('testing manager', () => {
    const manager = new Manager('dave', 23, 'email@email.com', 1234)

    expect(manager.getName()).toBe('dave');
    expect(manager.getId()).toBe(23);
    expect(manager.getEmail()).toBe('email@email.com');
    expect(manager.getOfficeNumber()).toBe(1234);
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});