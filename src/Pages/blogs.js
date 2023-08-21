import React from "react";
import Header from "./header.js";
import Footer from "./footer.js";
import {Img, Icons, Blogs_img} from "../Utilities/Icons.js";


function Blogs(){
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3.5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const responsive_2 = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return(
    <div>
      <Header />
        <div className="banner_section">
          <img src={Img.blog_banner} className="banner_img" alt=""></img>
          <div className="banner_content">
              <a href="https://calendly.com/growingglobeimmigration">
                 <button className="embark_book_appoint">Book An Appointment</button>
              </a>
          </div>
        </div>
        <div className="Blog_section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2 className="blog_section_title">Latest Blogs</h2>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <div class="blog-card blog-card-blog">
                  <div class="blog-card-image">
                    <a href="#"> <img class="img" src={Blogs_img.blogs_1} ></img> </a>
                    <div class="ripple-cont"></div>
                  </div>
                  <div class="blog-table">
                    <h6 class="blog-category blog-text-success"><i class="far fa-newspaper"></i> News</h6>
                    <h4 class="blog-card-caption">
                      <a href="#">Advancement of Technology in Canadian Immigration</a>
                    </h4>
                    <p class="blog-card-description">When it comes to the usage of technology, Canada is off to a great start. This will ultimately reduce processing...</p>
                    <div class="ftr">
                      <div class="author">
                        <img src={Icons.useravtar} alt="..." class="avatar img-raised" ></img> <span className="blog_author_name">GGI</span>
                      </div>
                      <div class="stats"><i class="fa fa-calendar"></i> Mar 08, 2023</div>
                      </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="blog-card blog-card-blog">
                  <div class="blog-card-image">
                    <a href="#"> <img class="img" src={Blogs_img.blogs_2} ></img> </a>
                    <div class="ripple-cont"></div>
                  </div>
                  <div class="blog-table">
                    <h6 class="blog-category blog-text-success"><i class="far fa-newspaper"></i> News</h6>
                    <h4 class="blog-card-caption">
                      <a href="#">Families of Some Work Permit Holders are Now Eligible for OWP </a>
                    </h4>
                    <p class="blog-card-description">Work permits enable non-citizens and non-permanent residents of Canada to work in the country.</p>
                    <div class="ftr">
                      <div class="author">
                        <img src={Icons.useravtar} alt="..." class="avatar img-raised" ></img> <span className="blog_author_name">GGI</span>
                      </div>
                      <div class="stats"><i class="fa fa-calendar"></i> Jun 02, 2023</div>
                      </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="blog-card blog-card-blog">
                  <div class="blog-card-image">
                    <a href="#"> <img class="img" src={Blogs_img.blogs_3} ></img> </a>
                    <div class="ripple-cont"></div>
                  </div>
                  <div class="blog-table">
                    <h6 class="blog-category blog-text-success"><i class="far fa-newspaper"></i> News</h6>
                    <h4 class="blog-card-caption">
                      <a href="#">Tips for Students</a>
                    </h4>
                    <p class="blog-card-description">Statement of Purpose is the key document which is submitted with the study permit application. </p>
                    <div class="ftr">
                      <div class="author">
                        <img src={Icons.useravtar} alt="..." class="avatar img-raised" ></img> <span className="blog_author_name">GGI</span>
                      </div>
                      <div class="stats"><i class="fa fa-calendar"></i> Dec 12, 2022</div>
                      </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="blog-card blog-card-blog">
                  <div class="blog-card-image">
                    <a href="#"> <img class="img" src={Blogs_img.blogs_4} ></img> </a>
                    <div class="ripple-cont"></div>
                  </div>
                  <div class="blog-table">
                    <h6 class="blog-category blog-text-success"><i class="far fa-newspaper"></i> News</h6>
                    <h4 class="blog-card-caption">
                      <a href="#">Reasons for Refusal from Canada</a>
                    </h4>
                    <p class="blog-card-description">Refusal of a Canada visa is the biggest obstacle for individuals who want to study, work, and settle in...</p>
                    <div class="ftr">
                      <div class="author">
                        <img src={Icons.useravtar} alt="..." class="avatar img-raised" ></img> <span className="blog_author_name">GGI</span>
                      </div>
                      <div class="stats"><i class="fa fa-calendar"></i> Dec 05, 2022</div>
                      </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="blog-card blog-card-blog">
                  <div class="blog-card-image">
                    <a href="#"> <img class="img" src={Blogs_img.blogs_5} ></img> </a>
                    <div class="ripple-cont"></div>
                  </div>
                  <div class="blog-table">
                    <h6 class="blog-category blog-text-success"><i class="far fa-newspaper"></i> News</h6>
                    <h4 class="blog-card-caption">
                      <a href="#">TEER System</a>
                    </h4>
                    <p class="blog-card-description">New Canadian TEER System The new NOC system (TEER) was announced in 2020 and made public at...</p>
                    <div class="ftr">
                      <div class="author">
                        <img src={Icons.useravtar} alt="..." class="avatar img-raised" ></img> <span className="blog_author_name">GGI</span>
                      </div>
                      <div class="stats"><i class="fa fa-calendar"></i> Nov 29, 2022</div>
                      </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="blog-card blog-card-blog">
                  <div class="blog-card-image">
                    <a href="#"> <img class="img" src={Blogs_img.blogs_6} ></img> </a>
                    <div class="ripple-cont"></div>
                  </div>
                  <div class="blog-table">
                    <h6 class="blog-category blog-text-success"><i class="far fa-newspaper"></i> News</h6>
                    <h4 class="blog-card-caption">
                      <a href="#">OINP</a>
                    </h4>
                    <p class="blog-card-description">One of the Employer Job Offer streams of the Ontario Immigrant Nominee Program (OINP), a Provincial...</p>
                    <div class="ftr">
                      <div class="author">
                        <img src={Icons.useravtar} alt="..." class="avatar img-raised" ></img> <span className="blog_author_name">GGI</span>
                      </div>
                      <div class="stats"><i class="fa fa-calendar"></i> Nov 22, 2022</div>
                      </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="blog-card blog-card-blog">
                  <div class="blog-card-image">
                    <a href="#"> <img class="img" src={Blogs_img.blogs_7} ></img> </a>
                    <div class="ripple-cont"></div>
                  </div>
                  <div class="blog-table">
                    <h6 class="blog-category blog-text-success"><i class="far fa-newspaper"></i> News</h6>
                    <h4 class="blog-card-caption">
                      <a href="#">Express Entry Score</a>
                    </h4>
                    <p class="blog-card-description">Before kickstarting with the why’s and hows, let's try to fathom what CRS score is and how important of a role...</p>
                    <div class="ftr">
                      <div class="author">
                        <img src={Icons.useravtar} alt="..." class="avatar img-raised" ></img> <span className="blog_author_name">GGI</span>
                      </div>
                      <div class="stats"><i class="fa fa-calendar"></i> Nov 14, 2022</div>
                      </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="blog-card blog-card-blog">
                  <div class="blog-card-image">
                    <a href="#"> <img class="img" src={Blogs_img.blogs_8} ></img> </a>
                    <div class="ripple-cont"></div>
                  </div>
                  <div class="blog-table">
                    <h6 class="blog-category blog-text-success"><i class="far fa-newspaper"></i> News</h6>
                    <h4 class="blog-card-caption">
                      <a href="#">case study</a>
                    </h4>
                    <p class="blog-card-description">Growing Globe Immigration has been known for years now for successfully handling those cases where...</p>
                    <div class="ftr">
                      <div class="author">
                        <img src={Icons.useravtar} alt="..." class="avatar img-raised" ></img> <span className="blog_author_name">GGI</span>
                      </div>
                      <div class="stats"><i class="fa fa-calendar"></i> Nov 08, 2022</div>
                      </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      <Footer />
    </div>
  );
}


export default Blogs;
