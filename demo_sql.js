var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Ofer1234!",
  database: "mydb"
});

var adr = 'Mountain 21';

con.connect(function(err) {
  if (err) throw err;
  var sql= 'SELECT name,address FROM customers WHERE address = '+ mysql.escape(adr);
  con.query (sql , function (err, result,fields) {
    if (err) throw err;
    console.log(result);
    });
});