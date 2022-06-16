const express = require('express');
const router = express.Router()


let products = [
    { _id: 1, pname: 'bags', pdesc: 'wearable', pprize: 1200 },
]



// =================== ADD-PRDUUCT =================== //  

router.get('/products', (req, res) => {
    res.render('./products.handlebars', { products })
});


router.get('/add-product', (req, res) => {
    res.render('./add-product.handlebars');
});



router.post('/add-product', (req, res) => {
    console.log(req.body);
    let { _id, pname, pdesc, pprize } = req.body;
    _id = parseInt(_id);
    pprize = parseInt(pprize);
    products.push({ _id, pname, pdesc, pprize });
    res.redirect('/products/products');
});


// =================== EDIT-PRDUUCT =================== //  


router.get('/edit-product/:_id', (req, res) => {
    console.log(req.params._id);
    _id = parseInt(req.params._id);
    const index = products.findIndex((product) => {
        return parseInt(product._id) === parseInt(_id)
    })
    const selectedProduct = products[index]
    res.render('./edit-product.handlebars', { selectedProduct })
})


router.post('/edit-product', (req, res) => {
    console.log(req.body);
    let { _id, pname, pdesc, pprize } = req.body;
    _id = parseInt(_id);
    pprize = parseInt(pprize);

    const index = products.findIndex((product) => {
        return parseInt(product._id) === parseInt(_id);
    });
    products.splice(index, 1, { _id, pname, pdesc, pprize });
    res.redirect('/products/products')
})

// =================== DELETE-PRDUUCT =================== //  


router.get('/delete-product/:_id', (req, res) => {
    console.log(req.params._id);
    _id = parseInt(req.params._id);
    const index = products.findIndex((product) => {
        return parseInt(product._id) === parseInt(_id)
    })
    products.splice(index, 1);
    res.redirect('/products/products')
})

module.exports = router
