import express from "express";
import { getCustomer, getCustomerTable, createCustomer } from "./database.js"
const app = express();
const port = 3000;

app.use(express.json());

app.get("/customers", async (req, res) => {
    const customers = await getCustomerTable();
    res.send(customers);
})

app.get("/customer/:custID", async (req, res) => {
    const custID = req.params.custID;
    const customer = await getCustomer(custID);
    res.send(customer);
})

app.post("/newCustomer", async (req, res) => {
    const { name, email, phoneNo, shippingAddress } = req.body;
    const newCust = await createCustomer(name, email, phoneNo, shippingAddress);
    res.status(201).send(newCust);
})

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send("Something Broke  ");
})

app.listen(port, () => {
    console.log(`Server is running on Port ${port}`);
})
