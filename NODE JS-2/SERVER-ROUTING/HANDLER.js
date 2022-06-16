const axios = require('axios')

const userdata = [
    { Name: 'praveen', id: 101 },
    { Name: 'naveen', id: 102 },
    { Name: 'kiran', id: 103 }
]

const prodata = [
    { Name: 'cars', id: 101 },
    { Name: 'bikes', id: 102 },
    { Name: 'cycle', id: 103 }
]



const fetchdata = async () => {
    fetchdata = await axios.get('https://jsonplaceholder.typicode.com/posts')
    // console.log(fetchdata);
}


const fetch = fetchdata();


const handleRequest = (request, responce) => {

    if (request.url === '/') {
        responce.end('home page')
    }

    else if (request.url === '/login') {
        responce.end('login page')
    }

    else if (request.url === '/user') {
        const data = JSON.stringify(userdata)
        responce.end(data)
    }

    else if (request.url === '/products') {
        const Producedata = JSON.stringify(prodata)
        responce.end(Producedata)
    }

    else {
        responce.end(fetch)
    }
}

module.exports = {
    handleRequest
}