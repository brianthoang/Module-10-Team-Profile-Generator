const Engineer = require('../lib/engineer');

const engineer = new Engineer('Brittney Hoang', 012345, 'bhoang01@gmail.com', 'bhoang')

test('test github', () => {
    expect(engineer.getGithub() === 'bhoang');
})

test('test role', () => {
    expect(engineer.getRole() === 'Manager');
})