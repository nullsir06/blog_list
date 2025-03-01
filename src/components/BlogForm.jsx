import { useState } from 'react'
import PropTypes from 'prop-types'

const BlogForm = ({ createBlog }) => {
    const [newBlog, setNewBlog] = useState({
        title: '',
        author: '',
        url: ''
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setNewBlog(props => ({
            ...props,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        createBlog(newBlog)
        setNewBlog({
            title: '',
            author: '',
            url: ''
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h2>create new</h2>
                title
                <input
                    type="text"
                    value={newBlog.title}
                    name="title"
                    onChange={handleInputChange}
                />
            </div>
            <div>
                author
                <input
                    type="text"
                    value={newBlog.author}
                    name="author"
                    onChange={handleInputChange}
                />
            </div>
            <div>
                url
                <input
                    type="text"
                    value={newBlog.url}
                    name="url"
                    onChange={handleInputChange}
                />
            </div>
            <button type="submit">create</button>
        </form>
    )
}

BlogForm.propTypes = {
    createBlog: PropTypes.func.isRequired
}

export default BlogForm