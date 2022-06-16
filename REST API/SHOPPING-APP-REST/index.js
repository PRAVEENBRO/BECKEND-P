const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 2000;



const dburl = 'mongodb+srv://devilfighterz:Pinaya6667@cluster0.piou7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(
    dburl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (!err) {
        console.log('DB connected Successfully');
    } else {
        console.log('DB not connected');
    }
}
)


const productRouter = require('../SHOPPING-APP-REST/routes/product');
//  body parser middleware

app.use(express.urlencoded({ extension: true }));


//  json middle ware
app.use(express.json());+


//  router level middle ware
app.use('/products', productRouter);


app.get('/error', (req, res) => {
    res.status(500).send('something went wrong');
})

app.listen(port, () => {
    console.log(`port is listening on ${port}`)
})