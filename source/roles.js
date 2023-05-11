const connection = require('../db/connection')
const inquirer = require('inquirer')
const askQuestions = require('../index')

function viewAllRoles() {
   connection.query('SELECT * FROM role;', function (err, results, fields) {
      console.table(results);
      askQuestions.askQuestions();
   });
}

// Add roles

function addRole() {
   inquirer.prompt([{
      name: 'title',
      message: 'write role title',
   },
   {
      name: 'salary',
      message: 'write role salary',
   },
   {
      name: 'department_id',
      message: 'write department id',
   },
   ]).then(res => {
      connection.query('INSERT INTO role SET title = ?, salary = ?, department_id = ?', [res.title, res.salary, res.department_id], function (err, results, fields) {
         connection.query('SELECT * FROM role;', function (err, results, fields) {
            console.table(results);
            askQuestions.askQuestions();
         });
      });
   })
}


module.exports = { viewAllRoles, addRole };