const connection = require('../db/connection')
const { prompt } = require('inquirer')
const { askQuestions } = require('../index')

function viewAllDepartments() {
   connection.query('SELECT * FROM department;', function (err, results, fields) {
      console.table(results);
      askQuestions();
   });
}

function addDepartment() {
   prompt([{
      name: 'name',
      message: 'write department name',
   }]).then(res => {
      connection.query('INSERT INTO department SET name = ?;', res.name, function (err, results, fields) {
         connection.query('SELECT * FROM department;', function (err, results, fields) {
            console.table(results);
            askQuestions();
         });
      })
   })
}

module.exports = { viewAllDepartments, addDepartment };
