var mysql2 = require('mysql2');

var con = mysql2.createConnection({
  host: "localhost",
  user: "phpmyadmin",
  password: "aluno",
  database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM customers LIMIT 10", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
});
