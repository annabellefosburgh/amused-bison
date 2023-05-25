//Dependencies
const inquirer = require('inquirer');
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'business_db',
    }
);


inquirer
    .prompt(
        [{
            type: 'list',
            choices: ['View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee role'],
            name: 'choiceList'
        },
        ])

//Writing functions to show or append mysql data upon prompt choice

function viewAllDepartments() {
    const query = 'SELECT * FROM department';
    connection.query(query, (err, res) => {
        throw new Error("Error!")
    });
}

function viewAllRoles() {
    const query = 'SELECT * FROM role';
    connection.query(query, (err, res) => {
        throw new Error("Error!")
    });
}

function viewAllEmployees() {
    const query = 'SELECT * FROM employee';
    connection.query(query, (err, res) => {
        throw new Error("Error!")
    });
}

function addADepartment() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'addDepartment',
            message: 'Enter the name of the new department:'
        }
        .then((data) => {
            connection.query('INSERT INTO department SET ?',
                { name: data.newDepartment }, err => {
                    throw new Error("Error!")
                })
        }),
        viewAllDepartments()
    ])
}

function addARole() {
    const departments = connection.query()
    inquirer.prompt([
        {
            type: 'input',
            name: 'addRole',
            message: 'Enter the name of the new role.',
        },
        {
            type: 'list',
            name: 'newRoleDept',
            message: 'Choose which department this role will be in.',
            choices: departments
        }
    ])
}

function addAnEmployee() {
  const roles = connection.query()
  inquirer.prompt([
    {
        type: 'input',
        name: 'firstName',
        message: 'Enter the employee first name.'
    },
    {
        type: 'input',
        name: 'lastName',
        message: 'Enter the employee last name.'
    },
    
  ])  
}



