const { test, expect } = require("@jest/globals")
const Intern = require("../lib/Intern")
test('testing intern', () => {
    const intern = new Intern('dave', 23, 'email@email.com', 'UCLA')

    expect(intern.getName()).toBe('dave');
    expect(intern.getId()).toBe(23);
    expect(intern.getEmail()).toBe('email@email.com');
    expect(intern.getSchool()).toBe('UCLA');
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});