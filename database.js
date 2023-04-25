import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

let connection;
mysql.createConnection({
    host: process.env.db_host,
    user: process.env.db_user,
    password: process.env.db_password,
    database: process.env.db_database,
}).then(p => {
    connection = p;
}).catch(err => console.error(err))

// <------------------------------------------- P R O D U C T S ------------------------------------------->

export async function getProducts() {
    try {
        const [row] = await connection.execute("SELECT * from Products")
        return row;
    } catch (err) {
        console.log(err);
    }
}

export async function getProduct(PID) {
    const [row] = await connection.execute(
        // Passing the Prepared Statement
        `SELECT * from Products 
        where PID = ?` , [PID]
    )
    return row;
}


export async function addProduct(CID, PID, PName, Price, Qty) {
    const [addProduct] = await connection.execute(`Insert into Products(CID , PID , PName , Price ,Qty ) values
    (? ,? ,? ,? , ?)`, [CID, PID, PName, Price, Qty]);
    return addProduct;
}

export async function deleteProduct(PID) {
    await connection.execute(
        `Delete from Products 
        where PId = ?`, [PID]
    )
}

export async function updateProduct(newQty, PID) {
    const [updatedProduct] = await connection.execute(`Update Products set Qty = ${newQty} where PID = ?`, [PID])
    return updatedProduct;
}

// <------------------------------------------- C U S T O M E R S ------------------------------------------->

export async function getCustomers() {
    try {
        const [row] = await connection.execute(
            `Select * from User `
        );
        return row;
    }
    catch (err) {
        console.log(err);
    }
}

export async function getCustomer(UserID) {
    const [row] = await connection.execute(`
    Select * from User where UserID = ? ` , [UserID]
    )
    return row;
}

export async function addCustomer(Name, Email, PhoneNumber, Password, Address) {

    const UserID = Math.floor(Math.random() * 10000) + 1;
    const [newCustomer] = await connection.execute(`Insert into User( UserID ,Name , Email , PhoneNumber , Password , Address) values (?, ? , ? , ? , ? , ? ) 
    ` , [UserID, Name, Email, PhoneNumber, Password, Address]);
    return newCustomer;
}

// <------------------------- AFTER BUYING --------------------------->

export async function buyProduct(Qty, PID) {
    let a = Math.floor(Math.random() * 96 + 1);
    const [currQuantity] = await connection.execute(`Select Qty from Products where PID = ?`, [PID]);

    const currQuantityFirstObj = currQuantity[0].Qty;
    if (currQuantityFirstObj === 0) {
        return `No Product with PID = ${PID} is available`;
    } else if (Qty < currQuantityFirstObj) {
        const [updatedQuantity] = await connection.execute(`UPDATE Products SET Qty = Qty - ${Qty} WHERE PID = ?`, [PID]);

        const cartItemID = `C00${a - 1}`;
        // const cartID = `C00${a += 3}`;

        const [updatedCart] = await connection.execute(`INSERT INTO CartItem (CartItemID, PID) VALUES (?,  ?)`, [cartItemID, PID]);
        return [updatedQuantity, updatedCart];
    } else {
        return `Not Enough Products with PID = ${PID}`;
    }
}


export async function getCartItems() {
    const [items] = await connection.execute(`Select * from CartItem`);
    return items;
}