import "./Post.css";
import postImage from "../../Assets/images/HeroImages/post.jpg";

const Post = () => {
    return (
        <div className="post">
            <div className="post_wrapper">
                <img className="post_img" src={postImage} alt="" />
                <div className="post_categories">
                    <p className="post_category">Music</p>
                    <p className="post_category">Lifestyle</p>
                </div>
                <h2 className="post_title">Tempore, libero?</h2>
                <div className="post_data">
                    <p className="post_author">Blain Muema</p>
                    <p className="post_date">2 hours ago</p>
                </div>
                <p className="post_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias quam facilis voluptate consequuntur doloremque quas quod ducimus deleniti rem esse, maxime laudantium quisquam nulla, maiores voluptatibus, officia nesciunt.</p>
            </div>
        </div>
    )
}

export default Post
