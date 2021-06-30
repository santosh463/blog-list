// Write your JS code here
import './index.css'

import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsData} = props
  return (
    <div className="blog-list-container">
      {blogsData.map(each => (
        <BlogItem blog={each} key={each.id} />
      ))}
    </div>
  )
}

export default BlogList
