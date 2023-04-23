import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

let pool;
mysql.createConnection({
    host: process.env.db_host,
    user: process.env.db_user,
    password: process.env.db_password,
    database: process.env.db_database,
}).then(p => {
    pool = p;
}).catch(err => console.error(err))
