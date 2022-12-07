const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/User')
const loginController = {}

loginController.login = async (req,res)=>{
    const body = req.body

    try {
        const user = await User.findOne({username:body.username})
        
    const passwordCorrect = user === null
        ? false
        : await bcrypt.compare(body.password, user.passwordHash)

        if (!(user && passwordCorrect)){
            return res.status(401).json({
                error: 'invalid username/password'
            })
        }

    const userForToken = {
        username: user.usernamem,
        id: user._id
    }    
    const token = jwt.sign(userForToken, process.env.SECRET)

    res
        .status(200)
        .send({token,username:user.username, name:user.name})
    } catch (error) {
        console.log(error)
    }
    
}
module.exports = loginController