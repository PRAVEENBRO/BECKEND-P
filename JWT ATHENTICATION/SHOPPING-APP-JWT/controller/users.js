const userModule = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// registration logic
const register = async (req, res, next) => {
    console.log(req.body);
    const { fname, lastname, email, password, role } = req.body;
    try {
        const emailExists = userModule.findOne({ email: email });
        if (emailExists) {
            res.status(400).json({
                error: true,
                message: "email already exist",
                body: null
            })
        } else {
            const saltrounds = 10;

            // salt of the password
            const salt = await bcrypt.genSalt(saltrounds);
            console.log(salt);


            // hash password
            const hashedPassword = await bcrypt.hash(password, salt);

            await userModule.insertMany([{
                fname, lastname, email, role, password: hashedPassword
            }])
            res.status(200).json({
                error: false,
                message: "registration successfull",
                body: null
            })
        }


    } catch (err) {

        next(err)
    }
}

// logon logic

const login = async(req, res, next) => {
    const { email, password } = req.body;
    try {
        const emailExists = userModule.findOne({ email: email })

        if (emailExists) {
            const { fname, lname, role } = req.body
            const isMatch = await bcrypt.compare(password, emailExists.password)

            if (isMatch) {

                const AUTHKEY = "MYNAMEISPRAVEENBRO"
                const payload = { fname, lname, role }
                
                const token = await jwt.sign(payload, AUTHKEY, {
                    expiresIn: "5h"
                });
                // res.cookie("AuthToken", token)
                res.status(200).json({
                    error: false,
                    message: "login Successful",
                    body: {
                        fname, lname, role
                    }
                })
            } else {
                res.status(401).json({
                    error: true,
                    message: "invalid password",
                    body: null
                })
            }

        } else {

            res.status(401).json({
                error: true,
                message: "invalid user",
                body: null
            })


        }

    } catch (err) {
        next(err);
    }
}

module.exports = {
    register,
    login
}  