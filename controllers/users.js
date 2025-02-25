const bcryptjs = require('bcryptjs')
const usersRouter = require('express').Router()
const User = require('../models/user')



usersRouter.post('/', async (request, response) => {
    const { username, name, password } = request.body

    const saltRounds = 10
    const passwordHash = await bcryptjs.hash(password, saltRounds)

    const user = new User({
        username,
        name,
        passwordHash,
    })

    const savedUser = await user.save()

    response.status(201).json(savedUser)
})
//将 request 参数改为 _request 是为了表示它未被使用。这是一种编程惯例
usersRouter.get('/', async (_request, response, next) => {
    try {
        const users = await User.find({}).populate('blogs', {
            title: 1,
            author: 1,
            url: 1,
            likes: 1,
        })

        response.json(users)
    } catch (error) {
        next(error)
    }
})

module.exports = usersRouter
