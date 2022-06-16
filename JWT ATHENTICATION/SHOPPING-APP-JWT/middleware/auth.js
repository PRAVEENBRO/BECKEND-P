const jwt = require('jsonwebtoken');


//  user or admin

const authorizeUserAdmin = async (req, res, next) => {
    console.log(req.headers['authotization']);
    if (req.headers['authotization']) {
        const token = req.headers['authotization'].split(' ')[1];
        const payload = await jwt.verify(token, AUTHKEY) 
        if (payload === "user" || payload === 'admin') {
            next();
        } else {
            res.res.status(401).json({
                error: true,
                message: "Not Authorized",
                data: null
            })
        }
    }
}


