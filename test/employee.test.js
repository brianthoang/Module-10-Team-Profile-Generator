const Employee = require('../lib/employee');

const employee = new Employee('Brian Hoang', 326405, 'brianhoang36@gmail.com');

test('test name', () => {
    expect(employee.getName() === 'Brian Hoang');
})

test('test id', () => {
    expect(employee.getId() === 326405);
})

test('test email', () => {
    expect(employee.getEmail() === 'brianhoang36@gmail.com');
})

test('test role', () => {
    expect(employee.getRole() === 'Employee');
})