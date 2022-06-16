const express = require('express');
const app = express();
const port = 4000;
const path = require('path')



//  middleware function

app.use(express.static('./public'))
  
// hiddinf the folder name from the user in frontend

app.use('/static',express.static('./files'))

// user defined middleware function
const getDate = (req, res, next) => {
    const date = Date.now();
    req.reqDate = date;
    next();
}



const getMsg=(req,res,next)=>{
    console.log('this is the second middel ware function');
    res.msg='Responce object has been Change';
    next();
}



app.use(getDate);
app.use(getMsg);


//  using user defined middel ware

app.get('/detail', (req, res) => {
    res.send(`<h1>this is the Detail page</h1>
    <p>Current Date and Time: ${new Date(req.reqDate)}</p>
    <button onclick="alert('Hello world')">Click</button>
    `)
})

app.get('/msg',(req, res)=>{
    res.send(res.msg)
})


//=======================================//
app.get('/', (req, res) => {
    res.send("this has came from express server")
    console.log("using send method")
})

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'))
})


app.all("*",(req,res)=>{
    throw new Error("this path dosnt exist")
})

app.use((err, req, res,next)=>{
    res.send(err.Message);
    next();
})


app.listen(port, () => {
    console.log(`the server is running at port number ${port} `);
})