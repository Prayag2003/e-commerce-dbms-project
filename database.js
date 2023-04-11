import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

// Pool Object --> collection of objects
let pool;
mysql.createConnection({
    host: process.env.db_host,
    user: process.env.db_user,
    password: process.env.db_password,
    database: process.env.db_database,
}).then(p => {
    pool = p;
}).catch(err => console.error(err))

export async function getCustomerTable() {
    try {
        const [row] = await pool.execute("SELECT * from customer")
        return row;
    } catch (err) {
        console.log(err);
    }
}

export async function getCustomer(custID) {
    const [row] = await pool.execute(
        // Passing the Prepared Statement
        `SELECT * from customer 
        where custID = ?` , [custID]
    )
    return row;
}

export async function createCustomer(name, email, phoneNo, shippingAddress) {

    const [newCustomer] = await pool.execute(`Insert into customer (name , email , phoneNo , shippingAddress ) values ( ? , ? , ? , ? ) 
    ` , [name, email, phoneNo, shippingAddress])
    const id = newCustomer.insertId;
    return getCustomer(id);
}

export async function deleteCustomer(custID) {
    await pool.execute(
        `Delete from customer 
        where custID = ?`, [custID]
    )
}