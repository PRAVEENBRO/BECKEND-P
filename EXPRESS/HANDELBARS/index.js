const express = require('express')
const exphbs = require('express-handlebars')
const port = 2000;

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    const person = {
        name: 'PRAVEEN',
        id: '210'
    }
    res.render('./home.handlebars', { person })
})


app.get('/about', (req, res) => {
    const persons = [
        { name: 'praveen', id: '289' },
        { name: 'omkar', id: '210' },
        { name: 'shivam', id: '026' },
        { name: 'dhanushree', id: '128' }
    ]
    res.render('./about.handlebars', { persons })
})


app.get('/contact', (req, res) => {
    const user = ['Harsha', ' Savanth', 'Jerusha', 'Praveen']
    res.render('./contact.handlebars', { user })
})


app.listen(port, () => {
    console.log(`server is running at port  ${port}`);
})