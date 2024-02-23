import React, { useState, useEffect } from 'react';
import "./Blog.css"
import Layout from "../../Layout/Layout"


const Blog = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []); // Run effect only once on component mount

  return (
    <Layout>

      <div className="blog">
        <h1 className="page_title">Our <span>Blog</span></h1>
        <div className="blog_wrapper">
          {posts.map(post => (
            <div className="blog_card" key={post.id}>
              <div className="blog_image">
                <img src="" alt="" srcset="" />
              </div>

              <div className="blog_details">

                <h4 className="blog_title">{post.title}</h4>
                <p className="blog_text">{post.body}</p>

              </div>
            </div>

          ))}

        </div>
      </div>
    </Layout >
  );
};

export default Blog


