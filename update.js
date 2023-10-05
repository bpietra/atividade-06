var mysql2 = require('mysql2');

var con = mysql2.createConnection({
  host: "localhost",
  user: "phpmyadmin",
  password: "aluno",
  database: "mydb"
});

con.connect(function(err) {
   if (err) throw err;
   var sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";
      con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result.affectedRows + "record(s) update");
      });
});
