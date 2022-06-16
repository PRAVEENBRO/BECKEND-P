const express = require('express');
const exphbs = require('express-handlebars');
const { redirect } = require('express/lib/response');
const router = express.Router();


const app = express();

const product = require('../model/product');
console.log(product.find());


router.get('/products', async (req, res) => {
    try {
        const products = await product.find().lean();
        res.render('./products.handlebars', { products })
    } catch (err) {
        res.redirect('/error')
    }
})


// =================== ADD-PRDUUCT =================== //  


router.get('/add-product', (req, res) => {
    res.render('./add-product.handlebars')
})


router.post('/add-product', async (req, res) => {
    // console.log(req.body);
    let { pName, pDesc, pPrice } = req.body;
    pPrice = parseInt(pPrice);
    try {
        await product.insertMany([
            {
                pName,
                pDesc,
                pPrice
            }
        ])
        res.redirect('/products/products')
    } catch (err) {
        res.redirect('/error')
    }
})





// =================== EDIT-PRDUUCT =================== //  


router.get('/edit-product/:_id', async (req, res) => {
    console.log(req.params._id);
    try {
        const productToEdit = await product.findOne(
            { _id: req.params._id }).lean();
        res.render('./edit-product.handlebars', {
            selectedProduct: productToEdit
        })
    } catch (err) {

        res.redirect('/error')
    }
}
)



router.post('/edit-product', async (req, res) => {
    console.log(req.body);
    let { _id, pName, pDesc, pPrice } = req.body;
    pPrice = parseInt(pPrice);
    try {
        await product.updateOne(
            { _id }, {
            $set: { pName, pDesc, pPrice }
        })
        res.redirect('/products/products')
    } catch (err) {
        res.redirect('/error')
    }
})


// =================== DELETE-PRDUUCT =================== //  


router.get('/delete-product/:_id', async (req, res) => {
    console.log(req.params._id);
    _id = req.params._id;
    console.log(product);
    try {
        await product.deleteOne(
            { _id: _id });
        res.redirect('/products/products');
    } catch (err) {
        res.redirect('/error')
    }
})


module.exports = router