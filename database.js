import mysql from 'mysql2';

// Pool Object
const pool = mysql.createPool({
    host: "localhost:3306",
    user : "root",
    password : "",
    database : "dbms",
}).promise()

const result = await pool.query("SELECT * from customer")
console.log(result);