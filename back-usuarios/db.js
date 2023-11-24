const mysql = require("mysql");

const db = mysql.createPool
({

    host: "localhost",
    user : "root",
    password : "",
    database : "login",

});

module.exports = db;