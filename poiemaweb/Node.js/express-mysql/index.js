var mysql = require('mysql');
var connection = mysql.createConnection({
  host      : 'localhost',
  user      : 'root',
  password  : '012345',
  port      : '3306',
  database  : 'my_db'
});

connection.connect();

var sql = 'SELECT * FROM Persons'
connection.query(sql, function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.', err);
});

connection.end();