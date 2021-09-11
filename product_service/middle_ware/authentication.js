const jwt = require('jsonwebtoken');

const isAuthenticated = async (req, res, next ) => {
    const token = req.headers.authorization; //req.headers['authorization'].split(' ')[1]

     jwt.verify(token, '123321', (err, user) => {
        if(err){
            return res.json({message: err})
        }
        req.user = user;
        next()
    });
}

module.exports = {
    isAuthenticated
}