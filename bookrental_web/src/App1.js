// Install sqlite3 : npm i sqlite3
// run: node ./App1.js

// Connect
const sqlite3 = require("sqlite3").verbose();
let sql;

const db = new sqlite3.Database("./test.db",sqlite3.OPEN_READWRITE,(err)=>{
    if (err) return console.error(err.message);
})

// Create table
// sql = `CREATE TABLE users(id INTEGER PRIMARY KEY,first_name,last_name,username,password,email)`;
// db.run(sql);


// Insert data into table
// sql = `INSERT INTO users(first_name,last_name,username,password,email) VALUES (?,?,?,?,?)`
// db.run(sql,["thanh","star","thanhstar","123","thanhstar260@gmail.com"],(err) =>{
//     if (err) return console.error(err.message);
// })
// db.run(sql,["nhan","ngoc","NgHan","123","ngocnhan@gmail.com"],(err) =>{
//     if (err) return console.error(err.message);
// })

// Query the data
sql = `SELECT * FROM users`
db.all(sql,[],(err,rows) =>{
    if (err) return console.error(err.message);
    rows.forEach((row) => {
        console.log(row);
    });
})

// Drop table
// db.run("DROP TABLE users");




