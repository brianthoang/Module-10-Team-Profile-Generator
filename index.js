const inquirer = require('inquirer');
const fs = require('fs');

const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

const renderHTML = require('./src/renderHTML');

const myTeam = [];

const addManager = () => {
    return inquirer.prompt ([
        {
            type: "input",
            name: "name",
            message: "Input manager's name:",
            validate: (value) => {
                if (value) {return true} else {return 'Please input value.'}}
        },
        {
            type: "input",
            name: "id",
            message: "Input manager's ID:",
            validate: (value) => {
                if (value) {return true} else {return 'Please input value.'}}
        },
        {
            type: "input",
            name: "email",
            message: "Input manager's email address:",
            validate: (value) => {
                if (value) {return true} else {return 'Please input value.'}}
        },
        {
            type: "input",
            name: 'officeNumber',
            message: "Input manager's office number:",
            validate: (value) => {
                if (value) {return true} else {return 'Please input value.'}}
        },
    ])

    .then (managerInput => {
        const {name, id, email, officeNumber} = managerInput;
        const manager = new Manager (name, id, email, officeNumber);

        myTeam.push(manager);
        console.log(manager);
    })
};

const addEmployee = () => {
    return inquirer.prompt ([
        {
            type: "list",
            name: "role",
            message: "Please choose employee's role:",
            choices: ["Engineer", "Intern"]
        },
        {
            type: "input",
            name: "name",
            message: "Input employee's name:",
            validate: (value) => {
                if (value) {return true} else {return 'Please input value.'}}
        },
        {
            type: "input",
            name: "id",
            message: "Input employee's ID:",
            validate: (value) => {
                if (value) {return true} else {return 'Please input value.'}}
        },
        {
            type: "input",
            name: "email",
            message: "Input employee's email address:",
            validate: (value) => {
                if (value) {return true} else {return 'Please input value.'}}
        },
        {
            type: "input",
            name: "github",
            message: "Input employee's github username:",
            when: (input) => input.role === "Engineer",
            validate: (value) => {
                if (value) {return true} else {return 'Please input value.'}}
        },
        {
            type: "input",
            name: "school",
            message: "Input intern's school:",
            when: (input) => input.role === "Intern",
            validate: (value) => {
                if (value) {return true} else {return 'Please input value.'}}
        },
        {
            type: "confirm",
            name: "plusEmployee",
            message: "Would you like to add another employee?",
            default: false
        }
    ])

    .then (employeeInput => {
        const {name, id, email, role, github, school, plusEmployee} = employeeInput;
        var employee;

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);
            console.log(employee);
        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);
            console.log(employee);
        }

        myTeam.push(employee);

        if (plusEmployee) {
            return addEmployee(myTeam);
        } else { return myTeam;}
    })
};

const writeFile = data => {
    fs.writeFile('./dist/myTeam.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {console.log("Team profile created!")}
    })
}

addManager()
    .then(addEmployee)
    .then(myTeam => {
        return renderHTML(myTeam);
    })
    .then(data => {
        return writeFile(data);
    })
    .catch(err => {
        console.log(err);
    });