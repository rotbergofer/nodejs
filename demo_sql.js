var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Ofer1234!",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  con.query ( "SELECT name,address FROM customers WHERE address LIKE 'S%'", function (err, result,fields) {
    if (err) throw err;
    console.log(result);
    });
});