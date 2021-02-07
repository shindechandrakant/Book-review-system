let  mysql = require('mysql2');
let mysqlDatabaseConnectionObj =  require('./globalObject');

let mysqlConnection = mysql.createConnection(mysqlDatabaseConnectionObj);

mysqlConnection.connect(err => {
    console.log(mysqlDatabaseConnectionObj);
    if(!!err) {
        console.log("Database connection fail ->>>>  "+ err.message + "  \nin " + __dirname + "\n" + err);
    }
    else {
        console.log("Database connected sucessfully in " + __dirname);
    }
});

module.exports =  mysqlConnection;











