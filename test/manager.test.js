const Manager = require('../lib/manager');

const manager = new Manager('Jane Doe', 234567, 'jdoe@gmail.com', 001)

test('test officeNumber', () => {
    expect(manager.getOfficeNumber() === 001);
})

test('test role', () => {
    expect(manager.getRole() === 'Manager');
})