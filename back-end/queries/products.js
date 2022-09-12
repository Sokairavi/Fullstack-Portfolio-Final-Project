const db = require("../db/dbConfig.js");

// GET ALL products
const getAllProducts = async () => {
    try {
        const allProducts = await db.any("SELECT * FROM products");
        return allProducts;
    } catch (error) {
        return error;
    }
};

// GET ONE product
const getOneProduct = async (id) => {
    try {
        const oneProduct = await db.one("SELECT * FROM products WHERE id=$1", id);
        return oneProduct;
    } catch (error) {
        return error;
    }
};

// CREATE product
const createProduct = async (product) => {
    try {
        const newProduct = await db.one(
            "INSERT INTO products (name, description, price, rating, category, image) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
            [product.name, product.description, product.price, product.rating, product.category, product.image]
            );
            return newProduct;
    } catch (error) {
        return error;
    }
};

// UPDATE product
const updateProduct = async (id, product) => {
    try {
        const updatedProduct = await db.one(
            "UPDATE products SET name=$1, description=$2, price=$3, rating=$4, category=$5, image=$6 WHERE id=$7 RETURNING *",
            [product.name, product.description, product.price, product.rating, product.category, product.image, id]
            );
            return updatedProduct;
    } catch (error) {
        return error;
    }
};

// DELETE product
const deleteProduct = async (id) => {
    try {
        const deletedProduct = await db.one(
            "DELETE FROM products WHERE id=$1 RETURNING *",
            id
        );
        return deletedProduct;
    } catch (error) {
        return error;
    }
};

module.exports = {
    getAllProducts,
    getOneProduct,
    createProduct,
    updateProduct,
    deleteProduct
};