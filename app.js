import express from "express";
import { getCustomer, getCustomerTable, createCustomer, deleteCustomer } from "./database.js"
const app = express();
const port = 3000;

app.use(express.json());

app.get("/products", async (req, res) => {
    try {
        const products = await getCustomerTable();
        res.send(products);
    }
    catch (err) {
        res.status(404).send("Customer Not Found !");
    }
})

// Searching by ID
app.get("/product/:PId", async (req, res) => {
    try {
        const PId = req.params.PId;
        const customer = await getCustomer(PId);
        res.send(customer);
    }
    catch (err) {
        res.status(404).send("Customer Not Found !");
    }
})

// Adding a new Customer
// app.post("/addProduct", async (req, res) => {
//     try {
//         const { name, email, phoneNo, shippingAddress } = req.body;
//         const newCust = await createCustomer(name, email, phoneNo, shippingAddress);
//         res.status(201).send(newCust);
//     } catch (error) {
//         res.status(500).send("Internal Server Error ! ")
//     }
// })

app.delete("/deleteProduct/:PId", async (req, res) => {
    try {
        const PId = req.params.PId;
        const quantity = req.params.Qty;
        quantity--;
        await deleteCustomer(PId);
        res.status(200).send(`Deleted Customer having CustID = ${PId}`);
    }
    catch (e) {
        console.log(e);
        res.status(500).send("Internal server error");
    }
})

app.listen(port, () => {
    console.log(`Server is running on Port ${port}`);
})
