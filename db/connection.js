const mysql = require('mysql2');

// Connect to database
const connection = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // MySQL password
        password: 'Bloodline_160897',
        database: 'employee_tracker_db'
    }
);


connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;