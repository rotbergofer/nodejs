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
    var sql1= "CREATE TABLE users (name VARCHAR(255), favo_product INT(50) )";
    var sql2 = "INSERT INTO users (name,favo_product) VALUES ?";
    var values = [
        ['John', 154],
        [ 'Peter',154],
        ['Amy',155],
        [ 'Hannah',],
        [ 'Michael',]
      ];
    con.query (sql1 , function (err, result) {
        if (err) throw err;
        console.log("Table Created");
    });
    con.query (sql2,function (err, result) {
        if (err) throw err;
        console.log("Values Inserted");
        console.log("Number of rows: " + result.affectedRows);
    });

});