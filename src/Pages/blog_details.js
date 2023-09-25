import React, { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import Header from "./header.js";
import Footer from "./footer.js";
import { Img } from "../Utilities/Icons.js";
import parse from "html-react-parser";
import axios from "axios";
import { FacebookShareButton, FacebookIcon, TwitterShareButton, LinkedinIcon, LinkedinShareButton } from 'react-share';
import twitter from "../Utilities/logo.webp"

function Blogs_Details() {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.get('/db.json');
        if (response.status === 200) {
          setPosts(response.data.posts);
        } else {
          console.log("Something went wrong");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getPosts();
  }, []);

  useEffect(() => {
    const selectedPost = posts.find((p) => p.id === parseInt(id));
    setPost(selectedPost);
  }, [id, posts]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <div className="banner_section">
        <img src={Img.blog_banner} className="banner_img" alt="" />
        <div className="banner_content_3">
          <h6 className="blog_detail_side_breadcrumn"><a href="/"><i class="fa fa-home"></i> HOME </a> | {post.title}</h6>
        </div>
        <div className="banner_content">
        <Link to = "https://calendly.com/growingglobeimmigration"  target="_blank" rel="noreferrer">
            <button className="embark_book_appoint_2">Book An Appointment</button></Link>
        </div>
      </div>
      <div className="Blog_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12"></div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <h2 className="blog_detail_section_title">{post.title}</h2>
              <hr className="blog_hr" />
              <div>
                <center>
                  <a href="#">
                    <img className="img blog_detail_img" src={post.image} alt={post.title} />
                  </a>
                </center>
                
              </div>
              <FacebookShareButton 
                        url={"https://vercelggi.vercel.app/blog_details"}
                        quote={"Hey guys! Check out this article!"}
                        hashtag="#GGI">
                        <button round = "true" className="fa fa-facebook facebook-icon share-icons"/>
                      </FacebookShareButton>

                      <TwitterShareButton 
                        url={"https://vercelggi.vercel.app/blog_details"}
                        quote={"Hey guys! Check out this article!"}
                        hashtag="#GGI">
                        <img className="share-icons twitter" src={twitter}></img>
                      </TwitterShareButton>

                      <LinkedinShareButton 
                        url={"https://vercelggi.vercel.app/blog_details"}
                        quote={"Hey guys! Check out this article!"}
                        hashtag="#GGI">
                        <button className="fa fa-linkedin linkedin-icon share-icons"/>
                      </LinkedinShareButton>
                      <br></br>
                      <br></br>
              <div className="blog_detail_para">{parse(post.body)}</div>
              <FacebookShareButton 
                        url={"https://vercelggi.vercel.app/blog_details"}
                        quote={"Hey guys! Check out this article!"}
                        hashtag="#GGI">
                        <button round = "true" className="fa fa-facebook facebook-icon share-icons"/>
                      </FacebookShareButton>

                      <TwitterShareButton 
                        url={"https://vercelggi.vercel.app/blog_details"}
                        quote={"Hey guys! Check out this article!"}
                        hashtag="#GGI">
                        <img className="share-icons twitter" src={twitter}></img>
                      </TwitterShareButton>

                      <LinkedinShareButton 
                        url={"https://vercelggi.vercel.app/blog_details"}
                        quote={"Hey guys! Check out this article!"}
                        hashtag="#GGI">
                        <button className="fa fa-linkedin linkedin-icon share-icons"/>
                      </LinkedinShareButton>
                      <br></br>
            </div>
            <div className="col-md-4">
              <div className="blog_detail_side_box">
                <h5 className="blog_detail_side_section_title">Recent Blogs</h5>
                {posts.map((recentPost) => (
                  <div key={recentPost.id}>
                    <div className="blog_detail_side_inner">
                      <div className="blog_detail_side_img_box">
                        <Link to={`/blog_details/${recentPost.id}`}>
                          <img className="blog_detail_side_img" src={recentPost.image} alt={recentPost.title} />
                        </Link>
                      </div>
                      <div>
                        <h6 className="blog_detail_side_title">{recentPost.title}</h6>
                        <h6 className="blog_date"><i className="fa fa-calendar"></i> {recentPost.published_date}</h6>
                      </div>
                      
                    </div>
                    <hr className="blog_detail_side_hr" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Blogs_Details;
