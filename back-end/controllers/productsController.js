const express = require("express");
const products = express.Router();

// queries & validations
const { getAllProducts, getOneProduct, createProduct, updateProduct, deleteProduct } = require("../queries/products.js");
const { checkText, checkInteger } = require("../validations/checkProducts.js");

// INDEX - GET ALL products
products.get("/", async (req, res) => {
    const allProducts = await getAllProducts();
    if (allProducts[0]) {
        res.status(200).json(allProducts);
    } else {
        res.status(500).json({ error: "500 - internal server error" });
    }
});

// GET ONE product
products.get("/:id", async (req, res) => {
    const { id } = req.params;
    const oneProduct = await getOneProduct(id);
    if (oneProduct.id) {
        res.status(200).json({payload: oneProduct, success: true});
    } else {
        res.status(404).json({ payload: "no products", sucess: false, error: "Product not found." });
    }
})

// CREATE product
products.post("/", checkText, checkInteger, async (req, res) => {
    const createdProduct = await createProduct(req.body); 
    if (createdProduct.id) {
        res.status(200).json(createdProduct);
    } else {
        res.status(500).json({ error: "500 - Product creation error." })
    }
})

// UPDATE product
products.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const updatedProduct = await updateProduct(id, body);
    if (updatedProduct.id) {
        res.status(200).json(updatedProduct);
    } else {
        res.status(422).json({ error: "422 - Cannot update product." })
    }
})

// DELETE product
products.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await deleteProduct(id);
    if (deletedProduct.id) {
        res.status(200).json(deletedProduct);
    } else {
        res.status(404).json({ error: "404 - Product not found" });
    }
})

module.exports = products;