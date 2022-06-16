const express = require('express');
const exphbs = require('express-handlebars');
const port = 3000;
const fs = require('fs')


const app = express();
const productsRoute = require('./routes/products.js')


    app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

let products = [
    { _id: 1, pname: 'bags', pdesc: 'wearable', pprize: 1200 },
]

//  Body Parser Middleware
app.use(express.urlencoded({ extended: true }));


//  Router level Middleware 
app.use('/products', productsRoute)

app.get('/landing', (req, res) => {
    res.render('./landingpage.handlebars', { products })

})

app.get('/', (req, res) => {
    res.render('./products.handlebars', { products })
});

/*

app.get('/products/products', (req, res) => {
    res.render('./products.handlebars', { products })
});



// =================== ADD-PRDUUCT =================== //  


app.get('/products/add-product', (req, res) => {
    res.render('./add-product.handlebars');
});



app.post('/products/add-product', (req, res) => {
    console.log(req.body);
    let { _id, pname, pdesc, pprize } = req.body;
    _id = parseInt(_id);
    pprize = parseInt(pprize);
    products.push({ _id, pname, pdesc, pprize });
    res.redirect('/products/products');
});


// =================== EDIT-PRDUUCT =================== //  


app.get('/products/edit-product/:_id', (req, res) => {
    console.log(req.params._id);
    _id = parseInt(req.params._id);
    const index = products.findIndex((product) => {
        return parseInt(product._id) === parseInt(_id)
    })
    const selectedProduct = products[index]
    res.render('./edit-product.handlebars', { selectedProduct })
})


app.post('/products/edit-product', (req, res) => {
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


app.get('/products/delete-product/:_id', (req, res) => {
    console.log(req.params._id);
    _id = parseInt(req.params._id);
    const index = products.findIndex((product) => {
        return parseInt(product._id) === parseInt(_id)
    })
    products.splice(index, 1);
    res.redirect('/products/products')
})

*/

app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
});
