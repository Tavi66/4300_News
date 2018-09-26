var http = require('http');
var express = require('express');
var path = require('path');
var mysql = require('mysql');
var app = express();
const port = 3000;

// create the connection 
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'web_development'
});

connection.connect((function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
}));

app.get('/',function(req,res){
	connection.query('SELECT * from article', function(err, rows, fields) {
 	connection.end();
   	if (!err)
    	console.log('The solution is: ', rows);
   	else
    	console.log('Error while performing Query.');
   });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));