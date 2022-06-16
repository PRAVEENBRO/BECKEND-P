const express = require('express');
const exphbs = require('express-handlebars');
const cookieParser = require('cookie-parser');
const session = require("express-session");

// console.log('session', session);

const port = 4455;
const oneDay = 24 * 60 * 60 * 1000;

const uname = 'technoElevate'
const pwd = 'technoElevate'
const app = express();

// session level Middleware

app.use(session({
    secret:"thisisasecretkey",
    saveUninitialized:true,
    resave:false,
    cookie:{
        maxAge: oneDay
    }
}))

//  cookie parser middle ware
app.get(cookieParser());

//  setting up express handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//  body parser middleware
app.use(express.urlencoded({ extended: true }));

//  User page

app.get('/user', (req, res) => {
    console.log(req.session);
    if (req.session.userid) {
        res.send(`session validated <a href="/logout" >Logout</a>`)
    } else {
        res.redirect('/')
    }
});


// login page 
app.post('/login', (req, res) => {
    let { username, password } = req.body
    console.log(req.body);
    if (username === uname && password === pwd) {
        req.session.userid = username
        console.log(req.session.userid);
        res.redirect('/user')
    } else {
        res.redirect('/');
    }
})



app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
})



app.get('/', (req, res) => {
    if (req.session.userid) {
        res.redirect('/user')
    } else {
        res.render('./login.handlebars')
    }
})



app.listen(port, () => {
    console.log(`Port is listening at localhost:${port}`);
})