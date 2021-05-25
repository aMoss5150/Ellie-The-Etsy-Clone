const express = require('express');
const asyncHandler = require('express-async-handler');

const router = express.Router();

const { Product } = require('../../db/models')

//products router

//get all products
router.get('/', asyncHandler(async (req, res) => {
    // find all the products in the DB through sequelize
    const products = await Product.findAll()

    // return the parsed response to the client
    return res.json(products);
}));

module.exports = router