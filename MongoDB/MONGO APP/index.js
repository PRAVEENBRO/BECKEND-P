const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const route = express.Route();
const port = 4400;

const app = express();

const dbUrl = 'mongodb+srv://devilfighterz:Pinaya6667@cluster0.piou7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err) => {
    if (!err) {
        console.log("DB connected successfully");
    } else {
        console.log('DB is not connected');
    }
}
)
// Importing Routes

const productRoutes = require('./routes/product')

// setting uo handlebars
app.engine('handlebars', exphbs());
app.set('views engine', 'handlebars');

// body parse middleware
app.use(express.urlencoded({ extented: true }));

// router  middlewares
app.use('/products', productRoutes)


app.get('/', (req, res) => {
    res.render('./login.handlebars');
})


// error route

app.get('/error', (req, res) => {
    res.status(500).send('spmting went wrong')
});

app.listen(port, () => {
    console.log(`the Server is Listening at localhost:${port}`);
});
