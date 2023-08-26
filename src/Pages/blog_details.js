import React from "react";
import Header from "./header.js";
import Footer from "./footer.js";
import {Img, Icons, Blogs_img} from "../Utilities/Icons.js";


function Blogs_Details(){
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
          <div className="banner_content_3">
            <h6 className="blog_detail_side_breadcrumn"><a href="/"><i class="fa fa-home"></i> HOME </a> | Advancement of Technology in Canadian Immigration</h6>
          </div>
        </div>
        <div className="Blog_section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
              </div>
            </div>
            <div className="row">
              <div className="col-md-8">
                <h2 className="blog_detail_section_title">Advancement of Technology in Canadian Immigration</h2>
                <hr className="blog_hr"/>
                <div>
                  <center>
                    <a href="#"> <img className="img blog_detail_img" src={Blogs_img.blogs_1} ></img> </a>
                  </center>
                </div>
                <p className="blog_detail_para">When it comes to the usage of technology, Canada is off to a great start. This will ultimately reduce processing times and simplify the immigration process. The fact that Immigration, Refugees and Citizenship Canada (IRCC) now processes cases more quickly than ever before thanks to cutting-edge artificial intelligence technology named "Chinook" is hardly news in today's world. What does this signify, though?</p>
                <h5 className="blog_detail_head">Let's define Chinook first.</h5>
                <p className="blog_detail_para">Chinook is an AI-powered system that can efficiently and swiftly process high volumes of immigration applications, hence minimizing applicant wait times. The system can also spot possible security or fraud threats, enhancing the integrity of the immigration process as a whole.</p>
                <h5 className="blog_detail_head">Should we support Chinook?</h5>
                <p className="blog_detail_para">Chinook can examine and comprehend a massive quantity of data, including intricate immigration laws and practices, by applying cutting-edge machine learning techniques. As a result, the system is able to make decisions based on a variety of criteria, which makes the immigration process fairer and more open. Therefore, while Chinook can streamline processes and provide faster services, it is essential for human decision-makers at IRCC to review and verify the system's output to ensure its accuracy and fairness.</p>
                <h5 className="blog_detail_head">Why is it important to exercise caution when using artificial intelligence?</h5>
                <p className="blog_detail_para">This technology will surely help to improve the lives of numerous people looking for a better future in Canada at a time when immigration is more crucial than ever to the country's economy and social fabric. Chinook has its limitations, though, and it's vital to remember that no technology is perfect all the time.</p>
                <p className="blog_detail_para">Chinook may occasionally run into circumstances where a decision's outcome is not totally clear-cut or when there is missing information, but it is not infallible, and there may be times when human intervention is required to confirm or clarify information. Therefore, it is essential to exercise discretion when using Chinook and not rely solely on the system's output. Ultimately, the responsibility for making decisions based on the available information rests with the human decision-makers at IRCC.</p>
                <p className="blog_detail_para">Overall, the use of AI technology like Chinook has the potential to greatly benefit immigrants and refugees seeking a better future in Canada, but it must be implemented with care and caution.</p>
                <p className="blog_detail_para">Isha Gupta <br/>R711878</p>
              </div>
              <div className="col-md-4">
                <div className="blog_detail_side_box">
                  <h5 className="blog_detail_side_section_title">Recent Blogs</h5>
                  <div className="blog_detail_side_inner">
                    <div className="blog_detail_side_img_box">
                      <img className="blog_detail_side_img" src={Blogs_img.blogs_2} ></img>
                    </div>
                    <div>
                      <h6 className="blog_detail_side_title">Families of Some Work Permit Holders are Now Eligible for OWP </h6>
                      <h6 className="blog_date"><i class="fa fa-calendar"></i> Jun 02, 2023</h6>
                    </div>
                  </div>
                  <hr className="blog_detail_side_hr" />
                  <div className="blog_detail_side_inner">
                    <div className="blog_detail_side_img_box">
                      <img className="blog_detail_side_img" src={Blogs_img.blogs_3} ></img>
                    </div>
                    <div className="blog_detail_side_div_2">
                      <h6 className="blog_detail_side_title">Tips For Students</h6>
                      <h6 className="blog_date"><i class="fa fa-calendar"></i> Dec 12, 2022</h6>
                    </div>
                  </div>
                  <hr className="blog_detail_side_hr" />
                  <div className="blog_detail_side_inner">
                    <div className="blog_detail_side_img_box">
                      <img className="blog_detail_side_img" src={Blogs_img.blogs_4} ></img>
                    </div>
                    <div className="blog_detail_side_div_2">
                      <h6 className="blog_detail_side_title">Reasons For Refusal From Canada</h6>
                      <h6 className="blog_date"><i class="fa fa-calendar"></i> Dec 05, 2022</h6>
                    </div>
                  </div>
                  <hr className="blog_detail_side_hr" />
                  <div className="blog_detail_side_inner">
                    <div className="blog_detail_side_img_box">
                      <img className="blog_detail_side_img" src={Blogs_img.blogs_5} ></img>
                    </div>
                    <div className="blog_detail_side_div_2">
                      <h6 className="blog_detail_side_title">TEER System </h6>
                      <h6 className="blog_date"><i class="fa fa-calendar"></i>  Nov 29, 2022</h6>
                    </div>
                  </div>
                  <hr className="blog_detail_side_hr" />
                  <div className="blog_detail_side_inner">
                    <div className="blog_detail_side_img_box">
                      <img className="blog_detail_side_img" src={Blogs_img.blogs_6} ></img>
                    </div>
                    <div className="blog_detail_side_div_2">
                      <h6 className="blog_detail_side_title">OINP</h6>
                      <h6 className="blog_date"><i class="fa fa-calendar"></i> Nov 22, 2022</h6>
                    </div>
                  </div>
                  <hr className="blog_detail_side_hr" />
                  <div className="blog_detail_side_inner">
                    <div className="blog_detail_side_img_box">
                      <img className="blog_detail_side_img" src={Blogs_img.blogs_7} ></img>
                    </div>
                    <div className="blog_detail_side_div_2">
                      <h6 className="blog_detail_side_title">Express Entry Score</h6>
                      <h6 className="blog_date"><i class="fa fa-calendar"></i>  Nov 14, 2022</h6>
                    </div>
                  </div>
                  <hr className="blog_detail_side_hr" />
                  <div className="blog_detail_side_inner">
                    <div className="blog_detail_side_img_box">
                      <img className="blog_detail_side_img" src={Blogs_img.blogs_8} ></img>
                    </div>
                    <div className="blog_detail_side_div_2">
                      <h6 className="blog_detail_side_title">Case Study</h6>
                      <h6 className="blog_date"><i class="fa fa-calendar"></i>  Nov 08, 2022</h6>
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


export default Blogs_Details;
