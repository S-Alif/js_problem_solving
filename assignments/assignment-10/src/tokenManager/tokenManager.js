const jsonwebtoken = require('jsonwebtoken');
const dotenv = require('dotenv')

dotenv.config({path:'./secret.env'})

// generate token
let generateToken = (userId, secretKey) => {
    let token = jsonwebtoken.sign({ userId }, secretKey, {expiresIn: '1h'})
    return token
}

// sign user
exports.userLogin = (req, res) => {
    let userId = process.env.secretUser
    let secretKey = process.env.secretKey

    let token = generateToken(userId, secretKey)

    res.json({
        message: 'success',
        token: token
    })
}

// authenticate user
exports.authenticate = (req, res, next) => {
    const token = req.headers['authorization']

    if(!token){
        return res.status(401).json({
            status: "401",
            TokenState: "no token found",
            message: "data retrieve blocked"
        })
    }

    jsonwebtoken.verify(token, process.env.secretKey, (err, decoded) => {
        if(err){
            return res.status(401).json({
                status: "401",
                message: "Unauthorized error"
            })
        }
        next()
    })
}