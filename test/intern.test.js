const Intern = require('../lib/intern');

const intern = new Intern('Emily Hoang', 123456, 'ehoang02@gmail.com', 'UCLA')

test('test school', () => {
    expect(intern.getSchool() === 'UCLA');
})

test('test role', () => {
    expect(intern.getRole() === 'Intern');
})