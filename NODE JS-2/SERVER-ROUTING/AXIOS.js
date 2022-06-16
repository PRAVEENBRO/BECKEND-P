const axios = require('axios')

const fetchdata=async()=>{
    const data = await  axios.get('https://jsonplaceholder.typicode.com/posts')
    console.log(data);
}

fetchdata();

// axios.get('https://jsonplaceholder.typicode.com/posts')
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })