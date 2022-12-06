const {Router} = require('express')
const {createUser, getUsers} = require('../controller/user.controller')
const userRouter = Router()

userRouter.route('/')
    .post(createUser)
    .get(getUsers)


module.exports = userRouter