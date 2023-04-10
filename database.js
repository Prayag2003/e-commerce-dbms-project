import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

// Pool Object --> collection of objects
const pool = mysql.createPool({
    host: process.env.db_host,
    user: process.env.db_user,
    password: process.env.db_password,
    database: process.env.db_database,
}).promise()

export async function getCustomerTable() {
    const [row] = await pool.query("SELECT * from customer")
    return row;
}

export async function getCustomer(custID) {
    const [row] = await pool.query(
        // Passing the Prepared Statement
        `SELECT * from customer 
        where custID = ?` , [custID]
    )
    return row;
}

export async function createCustomer(name, email, phoneNo, shippingAddress) {

    const [newCustomer] = await pool.query(`Insert into customer (name , email , phoneNo , shippingAddress ) values ( ? , ? , ? , ? ) 
    ` , [name, email, phoneNo, shippingAddress])
    const id = newCustomer.insertId;
    return getCustomer(id);
}

export async function deleteCustomer(custID) {
    await pool.query(
        `Delete from customer 
        where custID = ?`, [custID]
    )
}