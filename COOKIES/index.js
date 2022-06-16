const express = require('express');
const cookiePraser = require('cookie-parser');
const { getMaxListeners } = require('process');
const port = 9164;
const app = express();
const oneDay = 24 * 60 * 60 * 1000

//  Cookies parser Middleware

app.use(cookiePraser());


// Read Cookies

app.get('/read-cookie', (req, res) => {
    console.log(req.cookies);
    if (req.cookies) {
        res.send("cookies:" + " " + JSON.stringify(req.cookies))
    } else {
        res.send('cookies dose not exist')
    }
});

app.get('/create-cookie', (req, res) => {
    // console.log(req);
    res.cookie('name', 'DEVILFIGHTERZ');
    res.send('non-persistance cookies has been created');
});


//  create a persistance cookie
app.get('/create-pcookie', (req, res) => {
    res.cookie('email', 'devil@fighter.com', {
        maxAge: 6000000
    });
    res.send('persistance cookie has been created')
})




const technoElevate = [{
    name:"praveen",
    email: "PraveenBro@gmail.com",
    id: 123654789
},{
    name:"devil",
    email: "devilBro@gmail.com",
    id: 987654321
},{
    name:"pinaya",
    email: "pinayaBro@gmail.com",
    id: 987123654
}]



//  create a persistance object cookies

app.get('/create-objcookie', (req, res) => {
    res.cookie('data',technoElevate, {
        maxAge: oneDay
    })
    res.send('object cookie created');
})

app.get('/clear-cookie', (req, res) => {
    res.clearCookie('name');
    res.send('cookie is cleared');
})

app.get('/clearall-cookie', (req, res) => {
    for (let cookie in req.cookies) {
        res.clearCookie(cookie);
    }
    res.send('all cookie cleared');
})



app.listen(port, () => {
    console.log(`server is running at ${port}`);
});