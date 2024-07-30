const jwt = require('jsonwebtoken')
const User = require('../models/userSch')

const SECRET = process.env.SECRET_KEY || "dev-cvyt5etwem8ubkua"


const auth = async (req, res, next) => {

    try{
        // console.log
        const token = req.cookies.Clinicare

        // console.log(token)

        const verifyUser = jwt.verify(token, SECRET)

        const authUser = await User.findOne({_id: verifyUser._id, "tokens.token": token})

        if(!authUser){
            throw new Error('Please authenticate youself first')
        }

        req.user = authUser
        next()
    }

    catch(error){
        // console.log('Not Authentic')

        // res.status(401).send(error)
        // console.log(error)
        res.redirect('/signup')
    }
}

module.exports = auth