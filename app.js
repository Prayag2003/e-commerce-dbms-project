import express from "express";
import { getCustomer, getCustomerTable, createCustomer, deleteCustomer } from "./database.js"
const app = express();
const port = 3000;

app.use(express.json());

app.get("/customers", async (req, res) => {
    try {
        const customers = await getCustomerTable();
        res.send(customers);
    }
    catch (err) {
        res.status(404).send("Customer Not Found !");
    }
})

// Searching by ID
app.get("/customer/:custID", async (req, res) => {
    try {
        const custID = req.params.custID;
        const customer = await getCustomer(custID);
        res.send(customer);
    }
    catch (err) {
        res.status(404).send("Customer Not Found !");
    }
})

// Adding a new Customer
app.post("/addCustomer", async (req, res) => {
    try {
        const { name, email, phoneNo, shippingAddress } = req.body;
        const newCust = await createCustomer(name, email, phoneNo, shippingAddress);
        res.status(201).send(newCust);
    } catch (error) {
        res.status(500).send("Internal Server Error ! ")
    }
})

app.delete("/deleteCustomer/:custID", async (req, res) => {
    try {
        const custID = req.params.custID;
        const custName = req.params.name;
        await deleteCustomer(custID);
        res.status(200).send(`Deleted Customer having CustID = ${custID}`);
    }
    catch (e) {
        console.log(e);
        res.status(500).send("Internal server error");
    }
})

app.listen(port, () => {
    console.log(`Server is running on Port ${port}`);
})
