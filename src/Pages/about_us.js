import React from "react";
import Header from "./header.js";
import Footer from "./footer.js";
import {Img, FooterImg} from "../Utilities/Icons.js";
import VideoPlayer from "react-background-video-player";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {Link} from 'react-router-dom';

function About_us(){
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
          <img src={Img.about_us_banner} className="banner_img" alt=""></img>
          <div className="banner_content">
              <a href="https://calendly.com/growingglobeimmigration">
                 <button className="embark_book_appoint_2">Book An Appointment</button>
              </a>
          </div>
        </div>
        <div className="immigrate_canada_section" id="top">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h3 className="about_growing_head mt_50">About Growing Globe Immigration</h3>
                <p className="study_permit_para">At Growing Globe Immigration, we offer different and most suitable immigration processes for our clients. As regulated Immigration consultants and Immigrants to Canada we understand the needs of clients and are committed and immigrant to Canada understands the needs of his clients and is committed to helping them achieve their dream of living, working, studying, investing, or visiting Canada. We aims to help people across the world immigrate to Canada. We at Growing Globe believe in fairness, ethics, and values and are honored to be regulated by the Immigration Consultants of Canada Regulatory Council (ICCRC).</p>
                <button className="book_an_appointment_btn mr_15">Book An Appointment</button>
                <button className="book_an_appointment_btn">Create A Free Report</button>
              </div>
              <div className="col-md-6">
                <img src={Img.about} className="study_permit_img" alt=""></img>
              </div>
            </div>
          </div>
        </div>
        <div className="requirements_section">
          <div className="container">
            <div className="row align_item_center">
              <div className="col-md-12">
                <h3 className="study_permit_title">Who We Are?</h3>
                <p className="we_are_a_global_para">We are a global immigration company that is making a mark in every country that we settle in to help people immigrate to Canada - the country where dream turns into reality. Growing Globe Immigration is a team of stupendously talented and hardworking professionals with ample amount of transparency, who are very much client oriented. Our executive staff has the knowledge, enthusiasm, and commitment that fosters success. Our dedication to creating innovative products and investing in both the company and its people has helped us improve lives in the past.</p>
              </div>
              <div className="col-md-6">
                 <ul className="who_we_are_ul">
                    <li>Minimizing challenges associated with immigration and visa issuance</li>
                    <li>Collaborators from over 25 different countries</li>
                 </ul>
              </div>
              <div className="col-md-6">
                 <ul className="who_we_are_ul">
                    <li>Over 500 success stories and dream fulfilled</li>
                    <li>Get support in more 18 languages</li>
                 </ul>
              </div>
              <div className="col-md-3">
                <center>
                  <img src={Img.capic} className="logo_img" alt=""></img>
                </center>
              </div>
              <div className="col-md-3">
                <center>
                  <img src={Img.CICC} className="logo_img" alt=""></img>
                </center>
              </div>
              <div className="col-md-3">
                <center>
                  <img src={Img.Low_security} className="logo_img" alt=""></img>
                </center>
              </div>
              <div className="col-md-3">
                <center>
                  <img src={FooterImg.footer_img4} className="logo_img" alt=""></img>
                </center>
              </div>
            </div>
          </div>
        </div>

        <div className="why_glowing_section">
          <div className="container">
            <div className="row align_item_center">
              <div className="col-md-12">
                <h3 className="study_permit_title">Making Immigration Easy And Your Dream A Reality</h3>
                <p className="we_are_a_global_para">Thousands of people who wanted to migrate to Canada have found guidance from Growing Globe Immigration. Embrace your dream and turn it into your reality with us and call Canada your home.</p>
                <ul className="who_we_are_ul">
                  <li>Fair and honest commitments in our dealings</li>
                  <li>Proactive in anticipating opportunities, issues and addressing them in a timely manner</li>
                  <li>Undertaking right steps required</li>
                  <li>Working with passion, determination, and resilience</li>
                  <li>Valuing timelines required by the process.</li>
                  <li>Collection of feedback and continuously improving</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="consultants">
          <div style={{ position: "relative" }}>
            <Carousel responsive={responsive_2} showArrows={true} showDots={true}>
              <div className="consultants"><img src={Img.p1} className="embark_img" alt=""></img></div>
              <div className="consultants"><img src={Img.p2} className="embark_img" alt=""></img></div>
              <div className="consultants"><img src={Img.p3} className="embark_img" alt=""></img></div>
              <div className="consultants"><img src={Img.p4} className="embark_img" alt=""></img></div>
              <div className="consultants"><img src={Img.p5} className="embark_img" alt=""></img></div>
              <div className="consultants"><img src={Img.p6} className="embark_img" alt=""></img></div>
              <div className="consultants"><img src={Img.p7} className="embark_img" alt=""></img></div>
              <div className="consultants"><img src={Img.p1} className="embark_img" alt=""></img></div>
            </Carousel>
            <center>
              <Link to="/team"><button className="meet_the_team_btn">Meet the Team</button></Link>
            </center>
          </div>
        </div>
        <div className="contact_us_today_section">
           <div className="container-fluid">
              <div className="row align_item_center">
                <div className="col-md-12">
                  <h3 className="contact_us_today_text">Feel free to reach out to us for personalized support and guidance.</h3>
                  <button className="video_book_appoint mt_10">Book An Appointment</button>
                </div>
              </div>
           </div>
        </div>

      <Footer />
    </div>
  );
}

export default About_us;
