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
        const [row] = await pool.execute("SELECT * from Products")
        return row;
    } catch (err) {
        console.log(err);
    }
}

export async function getCustomer(PId) {
    const [row] = await pool.execute(
        // Passing the Prepared Statement
        `SELECT * from Products 
        where PId = ?` , [PId]
    )
    return row;
}

export async function createCustomer(name, email, phoneNo, shippingAddress) {

    const [newCustomer] = await pool.execute(`Insert into Products (name , email , phoneNo , shippingAddress ) values ( ? , ? , ? , ? ) 
    ` , [name, email, phoneNo, shippingAddress])
    const id = newCustomer.insertId;
    return getCustomer(id);
}

export async function deleteCustomer(PId) {
    await pool.execute(
        `Delete from Products 
        where PId = ?`, [PId]
    )
}