const mongoose = require('mongoose')
const Schema = mongoose.Schema



const userschema =  new Schema({
    fname: {
        type: String,
        require: true,
        minlength: 3,
        maxlength: 15
    },
    email: {
        type: String,
        require: true,
        minlength: 3,
        maxlength: 25
    },
    password: {
        type: String,
        require: true,
        minlength: 3,
        maxlength: 8
    },
    role: {
        type: String,
        require: true,
    }
})


module.exports = mongoose.model("users", userschema)