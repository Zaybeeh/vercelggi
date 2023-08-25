import React from "react";
import Header from "./header.js";
import Footer from "./footer.js";
import {Img} from "../Utilities/Icons.js";
import VideoPlayer from "react-background-video-player";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Business_visa(){
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
          <img src={Img.business_visa_banner} className="banner_img" alt=""></img>
          <div className="banner_content">
              <a href="https://calendly.com/growingglobeimmigration">
                 <button className="embark_book_appoint_2">Book An Appointment</button>
              </a>
          </div>
        </div>
        <div className="immigrate_canada_section" id="top">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h3 className="study_permit_title">Business Visa</h3>
              </div>
              <div className="col-md-6">
                <p className="study_permit_para">Are you planning to visit Canada for business purposes?</p>
                <p className="study_permit_para">A business visa is your key to unlocking opportunities in the vibrant Canadian market. At our consultancy, we specialize in helping individuals like you navigate the intricacies of various business and investment visas in Canada.</p>
                <p className="study_permit_para">We understand that each person's circumstances are unique, and that's why we offer personalized solutions tailored to your specific needs.</p>
              </div>
              <div className="col-md-6">
                <img src={Img.business_visa} className="study_permit_img" alt=""></img>
              </div>
            </div>
          </div>
        </div>
        <div className="requirements_section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h3 className="let_us_introduce_title">Let us introduce you to the array of business and investment visa options available in Canada:</h3>
              </div>
              <div className="col-md-4 d-flex">
                <div className="visa_card">
                   <img src={Img.business_visa_1} className="visa_img"></img>
                   <div className="visa_content">
                      <h3 className="visa_title">Business Visitor Visa</h3>
                      <p className="visa_para">If you're planning short-term business activities like attending meetings, conferences, or negotiations, the Business Visitor Visa is your ideal choice.</p>
                   </div>
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="visa_card">
                   <img src={Img.start_up_visa} className="visa_img"></img>
                   <div className="visa_content">
                      <h3 className="visa_title">Start-up Visa</h3>
                      <p className="visa_para">For aspiring entrepreneurs looking to establish a thriving business in Canada, the Start-up Visa program provides the opportunity to turn your dreams into reality. With our assistance, you'll navigate the requirements and secure the necessary support from designated organizations.</p>
                   </div>
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="visa_card">
                   <img src={Img.investor_visa} className="visa_img"></img>
                   <div className="visa_content">
                      <h3 className="visa_title">Investor Visa</h3>
                      <p className="visa_para">If you're prepared to make a significant investment in Canada, the Investor Visa is designed just for you. Our consultants will guide you through the investment and net worth requirements, ensuring a smooth application process.</p>
                   </div>
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="visa_card">
                   <img src={Img.intra_company_visa} className="visa_img"></img>
                   <div className="visa_content">
                      <h3 className="visa_title">Intra-Company Transfer Visa</h3>
                      <p className="visa_para">For multinational companies seeking to transfer employees to their Canadian branch or subsidiary, the Intra-Company Transfer Visa streamlines the process. Our expertise will ensure that the transition is seamless for both your business and employees.</p>
                   </div>
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="visa_card">
                   <img src={Img.card} className="visa_img"></img>
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="visa_card">
                   <img src={Img.self_employed_visa} className="visa_img"></img>
                   <div className="visa_content">
                      <h3 className="visa_title">Self-Employed Visa</h3>
                      <p className="visa_para">Are you a cultural, artistic, or athletic professional with aspirations to become self-employed in Canada? The Self-Employed Visa provides the opportunity to showcase your talent and contribute to the vibrant Canadian landscape. Our consultancy... Read More</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="why_glowing_section">
          <div className="container">
            <div className="row align_item_center">
              <div className="col-md-12">
                <h3 className="study_permit_title">Why Growing Globe Immigration?</h3>
                <ul className="why_glowing_ul">
                  <li>We pride ourselves on providing comprehensive guidance throughout the business visa application journey.</li>
                  <li>Together, we'll transform your business aspirations into reality, opening doors to new opportunities and growth.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="contact_us_today_section">
           <div className="container-fluid">
              <div className="row align_item_center">
                <div className="col-md-12">
                  <h3 className="contact_us_today_text">Contact us today, and our seasoned consultants will lead you <br /> towards a successful business visit or investment in Canada.</h3>
                  <button className="video_book_appoint mt_10">Book An Appointment</button>
                </div>
              </div>
           </div>
        </div>

      <Footer />
    </div>
  );
}

export default Business_visa;
