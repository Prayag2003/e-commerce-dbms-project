import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

// Pool Object --> collection of objects
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
}).promise()

export async function getCustomerTable() {
    const [row] = await pool.query("SELECT name from customer")
    return row;
}

export async function getCustomer(custID) {
    const [row] = await pool.query(
        // Passing the Prepared Statement
        `SELECT * from customer 
        where custID = ?` , [custID]
    )
    return row[0];
}

export async function createCustomer(name, email, phoneNo, shippingAddress) {

    const [newCustomer] = await pool.query(`Insert into customer (name , email , phoneNo , shippingAddress ) values ( ? , ? , ? , ? ) 
    ` , [name, email, phoneNo, shippingAddress])
    const id = newCustomer.insertId;
    return getCustomer(id);
}
