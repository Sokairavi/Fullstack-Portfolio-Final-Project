// DEPENDENCIES
const cors = require('cors');
const express = require("express");



// CONFIGURATION
const app = express();
const productsController = require("./controllers/productsController");


// MIDDLEWARE
app.use(express.json());
app.use(cors());
// app.use(express.static('public'))
app.use("/products", productsController);


// ROUTES
app.get('/', (req, res) => {
    res.send(`Welcome to the Hindu Spirituality Store!`);
});

app.get('*', (req, res) => {
    res.status(404).send("Page not found :(");
});

// EXPORT
module.exports = app;