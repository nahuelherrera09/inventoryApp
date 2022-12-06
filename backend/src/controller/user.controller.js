const bcrypt = require('bcrypt')
const User = require('../models/User')
const userController = {}

userController.createUser = async (req,res) =>{
    const body = req.body

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)
    console.log(passwordHash)

    const user = new User ({
        username: body.username,
        name: body.name,
        passwordHash,
    })

    const savedUser = await user.save()
    res.json(savedUser)
}

userController.getUsers = async(req,res) =>{
    const users = await User.find({})
    res.json(users)
}

module.exports = userController