const blogRouter = require('express').Router()
const Blog = require('../models/blog')



blogRouter.get('/', async (_request, response,) => {
    const blogs = await Blog.find({}).populate('user', { name: 1, username: 1 })
    return response.json(blogs)
})

blogRouter.post('/', async (request, response) => {
    const { title, author, url, likes } = request.body
    const user = request.user
    if (!title) {
        return response.status(400).json({ error: 'title is missing' })
    }

    if (!url) {
        return response.status(400).json({ error: 'url is missing' })
    }

    const blog = new Blog({
        title,
        author,
        url,
        likes: likes || 0,
        user: user._id,
    })

    const savedBlog = await blog.save()
    user.blogs = user.blogs.concat(savedBlog._id)
    await user.save()

    response.status(201).json(savedBlog)
}
)



module.exports = blogRouter