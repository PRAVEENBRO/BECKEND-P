const express = require('express');
const product = require('../models/product');



const getAllproduct = async (req, res, next) => {
    try {
        const products = await product.find().lean();
        res.json({
            error: false,
            message: "data fetch successfull",
            data: products
        })
    } catch (err) {
        next(err);
    }
}



const addProduct = async (req, res, next) => {
    try {
        let { pName, pDesc, pPrice } = req.body;
        await product.insertMany([{
            pName, pDesc, pPrice
        }]);
        res.json({
            error: false,
            massage: 'product has been added successfully',
            data: null
        })
    } catch (err) {
        next(err);
    }
}





const editProduct = async (req, res, next) => {
    try {
        let { _id, pName, pDesc, pPrice } = req.body;
        await product.updateOne(
            { _id }, {
            $set: {

                pName,
                pDesc,
                pPrice
            }
        })
        res.json(
            {
                error: false,
                message: "product updated successfully",
                data: null
            }
        )
    } catch (err) {
        next(err);
    }
}


const deleteProduct = async (req, res, next) => {
    let { _id } = req.body
    try {
        await product.deleteOne({ _id: _id });
        res.json(
            {
                error: false,
                message: "product deleted successfuly",
                data: null
            })
    } catch (err) {
        next(err)
    }

}

module.exports = {
    getAllproduct,
    addProduct,
    editProduct,
    deleteProduct
}

