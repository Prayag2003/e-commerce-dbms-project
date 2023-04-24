import express from "express";
import { getProducts, getProduct, addProduct, deleteProduct, getCustomers, addCustomer } from "./database.js"

// import swaggerUI from "swagger-ui-express";
// import swaggerJsDoc from "swagger-jsdoc";
// import YAML from 'yamljs';
// const swaggerDocument = YAML.load('./swagger.yaml');

const app = express();
const port = 3000;

// const swaggerOptions = {
//     swaggerDefinition: {
//         info: {
//             title: 'My API',
//             description: 'My API description',
//             contact: {
//                 name: 'John Doe'
//             },
//             servers: ['http://localhost:3000']
//         }
//     },
//     apis: ['./app.js']
// };

// swaggerJsDoc(swaggerOptions);
// app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));


app.use(express.json());

// <------------------------------------------- P R O D U C T S ------------------------------------------->

app.get("/products", async (req, res) => {
    try {
        const products = await getProducts();
        res.send(products);
    }
    catch (err) {
        res.status(404).send("Product Not Found !");
    }
})

// Searching Products by ID
app.get("/product/:PID", async (req, res) => {

    const PID = req.params.PID;
    try {
        const customer = await getProduct(PID);
        res.send(customer);
    }
    catch (err) {
        res.status(404).send(`Product with ${PID} is Not Found !`);
    }
})

app.post("/addProduct", async (req, res) => {
    try {
        const { CID, PID, PName, Price, Qty } = req.body;
        const newProd = await addProduct(CID, PID, PName, Price, Qty);
        res.status(201).send(newProd);
    }
    catch (err) {
        res.status(500).send(" Internal Server Error ! ")
    }
})

app.delete("/deleteProduct/:PID", async (req, res) => {
    try {
        const PID = req.params.PID;
        await deleteProduct(PID);
        res.status(200).send(`Deleted Customer having CustID = ${PID}`);
    }
    catch (e) {
        console.log(e);
        res.status(500).send("Internal server error");
    }
})


// <------------------------------------------- C U S T O M E R S ------------------------------------------->


app.get("/getCustomers", async (req, res) => {
    try {
        const customers = await getCustomers();
        res.send(customers);
    }
    catch (err) {
        res.status(404).send("Customers Not Found");
    }
})


// Adding a new Customer
app.post("/addCustomer", async (req, res) => {
    try {
        const { Name, Email, PhoneNumber, Password, Address } = req.body;
        const newCust = await addCustomer(Name, Email, PhoneNumber, Password, Address);
        res.status(201).send(newCust);
    } catch (err) {
        res.status(500).send("Internal Server Error ! ")
    }
})

app.listen(port, () => {
    console.log(`Server is running on Port ${port}`);
})