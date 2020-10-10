const { test, expect } = require("@jest/globals")
const Engineer = require("../lib/Engineer")
test('testing engineer', () => {
    const engineer = new Engineer('dave', 23, 'email@email.com', 'daves github')

    expect(engineer.getName()).toBe('dave');
    expect(engineer.getId()).toBe(23);
    expect(engineer.getEmail()).toBe('email@email.com');
    expect(engineer.getGithub()).toBe('daves github');
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});