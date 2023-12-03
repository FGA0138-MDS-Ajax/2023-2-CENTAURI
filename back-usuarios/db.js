const mysql = require("mysql");

const db = mysql.createPool
({

    host: "localhost",
    user : "mariana",
    password : "123123",
    database : "login",

});

module.exports = db;