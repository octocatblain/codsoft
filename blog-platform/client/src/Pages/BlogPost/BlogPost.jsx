import Sidebar from "../../Components/Sidebar/Sidebar"
import SinglePost from "../SinglePage/SinglePost"
import "./BlogPost.css"

const BlogPost = () => {
  return (
    <div className="blog_post">
      <SinglePost/>
      <Sidebar/>
    </div>
  )
}

export default BlogPost
