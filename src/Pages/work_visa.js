import React from "react";
import Header from "./header.js";
import Footer from "./footer.js";
import {Img} from "../Utilities/Icons.js";
import VideoPlayer from "react-background-video-player";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Work_visa(){
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
          <img src={Img.work_visa_banner} className="banner_img" alt=""></img>
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
                <h3 className="study_permit_title">Work Visa</h3>
              </div>
              <div className="col-md-6">
                <p className="study_permit_para">A Canadian work visa opens the doors to new job opportunities in a vibrant and diverse market. At our consultancy, we specialize in supporting individuals like you in navigating the intricacies of various Canadian work visas. We understand that your situation is unique, and we're dedicated to providing personalized solutions tailored to your specific needs.</p>
                <p className="study_permit_para">At our consultancy, we recognize the diverse range of individuals seeking Canadian work visas, including those involved in charitable or religious work, as well as vulnerable workers. We understand the importance of providing support and guidance tailored to the unique circumstances and needs of these individuals.</p>
              </div>
              <div className="col-md-6">
                <img src={Img.work_visa} className="study_permit_img" alt=""></img>
              </div>
            </div>
          </div>
        </div>
        <div className="requirements_section">
          <div className="container">
            <div className="row align_item_center">
              <div className="col-md-6">
                <div className="sdm_box">
                  <h3 className="sdm_stream_title">Charity and Religious Workers</h3>
                  <p className="if_you_are_para">If you are planning to engage in charitable or religious work in Canada, there are specific work permit options available. Depending on your role and the organization you will be working with, you may qualify for a work permit under the International Mobility Program (IMP) or other relevant programs. Our consultants can provide you with information on the specific requirements and assist you in navigating the application process.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="sdm_box">
                  <h3 className="sdm_stream_title">Vulnerable Workers</h3>
                  <p className="if_you_are_para">Canada is committed to protecting the rights and well-being of vulnerable workers, including those employed in low-wage or precarious jobs. The government has implemented measures to ensure fair treatment, safe working conditions, and appropriate compensation for these individuals. If you believe you are a vulnerable worker or have concerns about your working conditions, it is important to seek assistance and report any.... Read More </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="immigrate_canada_section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h3 className="let_us_introduce_title">Let's explore the range of Canadian work visa options available to you:</h3>
              </div>
              <div className="col-md-4 d-flex">
                <div className="visa_card">
                   <img src={Img.temporary_work_permit} className="visa_img"></img>
                   <div className="visa_content">
                      <h3 className="visa_title">Temporary Work Permit</h3>
                      <p className="visa_para">If you're looking to work in Canada for a specific period, the Temporary Work Permit is the perfect fit. This permit allows you to join a Canadian employer in a specific occupation for a defined duration. Depending on the job offer,... Read More</p>
                   </div>
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="visa_card">
                   <img src={Img.international_mobility_program} className="visa_img"></img>
                   <div className="visa_content">
                      <h3 className="visa_title">International Mobility Program (IMP)</h3>
                      <p className="visa_para">The IMP is designed to facilitate the entry of certain foreign workers into Canada, making it easier for you to contribute your skills and expertise. This program covers a wide range of categories, including intra-company... Read More</p>
                   </div>
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="visa_card">
                   <img src={Img.gobal_talent_stream} className="visa_img"></img>
                   <div className="visa_content">
                      <h3 className="visa_title">Global Talent Stream</h3>
                      <p className="visa_para">Are you a highly skilled worker in the fields of science, technology, engineering, or mathematics? The Global Talent Stream provides an expedited and simplified application process, allowing you to join the Canadian... Read More</p>
                   </div>
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="visa_card">
                   <img src={Img.provincial_nominee_program} className="visa_img"></img>
                   <div className="visa_content">
                      <h3 className="visa_title">Provincial Nominee Program (PNP)</h3>
                      <p className="visa_para">Canada's provinces and territories have unique labor market needs, and the PNP enables them to nominate foreign workers with specific skills and experience. This program offers you a chance to contribute to the local... Read More </p>
                   </div>
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="visa_card">
                   <img src={Img.parents_grandparents_visitor_visa} className="visa_img"></img>
                   <div className="visa_content">
                      <h3 className="visa_title">Parent and Grandparent Visitor Visa</h3>
                      <p className="visa_para">This visa allows parents and grandparents of Canadian citizens or permanent residents to visit Canada for extended periods. It requires sponsorship from their Canadian family member and meeting certain financial criteria.</p>
                   </div>
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="visa_card">
                   <img src={Img.spousal_work_permit} className="visa_img"></img>
                   <div className="visa_content">
                      <h3 className="visa_title">Spousal Work Permit</h3>
                      <p className="visa_para">If your spouse or common-law partner is studying or working in Canada, you may be eligible for an open work permit. This allows you to work for any employer in Canada without needing a job offer.</p>
                   </div>
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="visa_card">
                   <img src={Img.bringing_work_permit} className="visa_img"></img>
                   <div className="visa_content">
                      <h3 className="visa_title">Bridging Work Permit</h3>
                      <p className="visa_para">1. If you have submitted an application for permanent residence and your current work permit is expiring, a Bridging Work Permit can bridge the gap and allow you to continue working while awaiting a decision on your permanent residence application.</p>
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
                   <img src={Img.international_experiance_canada} className="visa_img"></img>
                   <div className="visa_content">
                      <h3 className="visa_title">International Experience Canada (IEC)</h3>
                      <p className="visa_para">The IEC program provides opportunities for young individuals from partner countries to work and travel in Canada. It includes various categories such as Working Holiday, Young Professionals, and International Co-op.</p>
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
                  <li>Our consultancy is committed to providing you with comprehensive guidance throughout the Canadian work visa application process, whether it involves an LMIA or falls under an LMIA-exempt category.</li>
                  <li>We understand the importance of your career aspirations and the impact that working in Canada can have on your professional growth.</li>
                  <li>Our team of experienced consultants will work closely with you, offering personalized support and guidance.</li>
                  <li>Together, we'll transform your dreams into reality, helping you embark on a rewarding career adventure in Canada. Also talk about charity and religious workers and vulnerable workers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="contact_us_today_section">
           <div className="container-fluid">
              <div className="row align_item_center">
                <div className="col-md-12">
                  <h3 className="contact_us_today_text">Contact us today to begin your Canadian work visa application journey</h3>
                  <button className="video_book_appoint mt_10">Book An Appointment</button>
                </div>
              </div>
           </div>
        </div>

      <Footer />
    </div>
  );
}

export default Work_visa;
