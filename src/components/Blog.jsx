const Blog = ({ blog }) => (
  <div>
    {blog.title} {blog.author}{blog.url}{blog.likes}{blog.user.name}
  </div>
)

export default Blog