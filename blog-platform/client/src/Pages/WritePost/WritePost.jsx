import "./WritePost.css"
import writeImage from "../../Assets/images/HeroImages/hero-4.jpg"
import Layout from "../../Layout/Layout"

const WritePost = () => {
    return (
    <Layout>
        <div className="write_post">
            <form action="" className="write_form">
                <img className="write_image" src={writeImage} alt="" srcset="" />
                <div className="write_form_group">
                    <label className="add_post_image" htmlFor="addImage">Add Image</label>
                    <input type="file" name="fileInput" id="addImage" style={{ display: "none" }} />
                    <input className="add_post_title" type="text" name="title" id="addTitle" placeholder="Add Post Title" autoFocus={true} />
                </div>
                <div className="text_form_group">
                    <textarea className="write_area" name="writeArea" id="writeArea" placeholder="Write your story..."></textarea>
                    <button className="publish_btn" type="submit">Publish</button>
                </div>
            </form>
        </div>
    </Layout>
    )
}

export default WritePost
