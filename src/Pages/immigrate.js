import React from "react";
import Header from "./header.js";
import Footer from "./footer.js";
import {Img} from "../Utilities/Icons.js";
import VideoPlayer from "react-background-video-player";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Immigrate(){
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
          <img src={Img.immigrate_banner} className="banner_img" alt=""></img>
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
                <h3 className="study_permit_title">Immigrate</h3>
              </div>
              <div className="col-md-6">
                <p className="immigrate_para ">Welcome to Growing Globe immigration, your trusted partner in helping you navigate the Canadian immigration landscape. We understand that pursuing your Canadian dreams involves exploring various immigration programs, and we're here to provide you with comprehensive information about the programs offered at both the federal and provincial levels.</p>
              </div>
              <div className="col-md-6">
                <img src={Img.immigrate} className="study_permit_img" alt=""></img>
              </div>
            </div>
          </div>
        </div>
        <div className="requirements_section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h3 className="let_us_introduce_title">Federal Programs:-</h3>
              </div>
              <div className="col-md-4 d-flex">
                <div className="visa_card">
                   <img src={Img.express_entry} className="visa_img"></img>
                   <div className="visa_content">
                      <h3 className="visa_title">Express Entry</h3>
                      <p className="visa_para">1. Get ready for an exciting journey with the Express Entry program, your fast track to Canadian permanent residency. Within Express Entry, there are three economic immigration categories:....Read More</p>
                   </div>
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="visa_card">
                   <img src={Img.athlentic_immigration_program} className="visa_img"></img>
                   <div className="visa_content">
                      <h3 className="visa_title">Atlantic Immigration Program</h3>
                      <p className="visa_para">Embark on a special journey through the Atlantic Immigration Pilot, a program focused on attracting skilled workers and international graduates to the vibrant Atlantic provinces. This program offers pathways to permanent... Read More</p>
                   </div>
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="visa_card">
                   <img src={Img.agreefood_immigration_pilot} className="visa_img"></img>
                   <div className="visa_content">
                      <h3 className="visa_title">Agri-Food Immigration Pilot</h3>
                      <p className="visa_para">This pilot program focuses on addressing labor shortages in the agri-food sector. It offers pathways for experienced workers in specific occupations within the industry to become permanent residents of Canada.</p>
                   </div>
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="visa_card">
                   <img src={Img.rural_and_northern_immigration_pilot} className="visa_img"></img>
                   <div className="visa_content">
                      <h3 className="visa_title">Rural and Northern Immigration Pilot</h3>
                      <p className="visa_para">This community-driven program aims to address labor market needs in rural and northern communities across Canada. It provides opportunities for skilled foreign workers to settle in these communities and contribute to their growth.</p>
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
                   <img src={Img.caregiver_programs} className="visa_img"></img>
                   <div className="visa_content">
                      <h3 className="visa_title">Caregiver Programs</h3>
                      <p className="visa_para">1. If you have experience in caring for children, elderly, or people with medical needs, the Caregiver Programs offer opportunities to work in Canada and eventually become a permanent resident. These programs include the... Read More</p>
                   </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="immigrate_canada_section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h3 className="let_us_introduce_title">Provincial Programs</h3>
                <p className="unlock_additional_para">Unlock additional opportunities for permanent residency through the Provincial Nominee Programs. Each province and territory in Canada has its unique PNP designed to meet specific labor market needs and attract skilled workers, entrepreneurs, and international graduates. These programs enable provinces to nominate individuals who can contribute to their local economy. Let's explore the streams available in each province and territory:</p>
              </div>
              <div className="col-md-4 d-flex">
                <div className="visa_card">
                   <img src={Img.quebec_skilled_worker_program} className="visa_img"></img>
                   <div className="visa_content">
                      <h3 className="visa_title">Quebec Skilled Worker Program (QSWP)</h3>
                      <p className="visa_para">Immerse yourself in the rich cultural experience of Quebec through the Quebec Skilled Worker Program. This program has unique selection criteria tailored to skilled workers who aspire to settle in the province of Quebec... Read More</p>
                   </div>
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="visa_card">
                   <img src={Img.ontario_immigrant_nominee_program} className="visa_img"></img>
                   <div className="visa_content">
                      <h3 className="visa_title">Ontario Immigrant Nominee Program (OINP)</h3>
                      <p className="visa_para">1. Experience the warmth and opportunities of Ontario through the Ontario Immigrant Nominee Program. It offers different streams catering to skilled workers, international graduates, and entrepreneurs who can contribute to... Read More</p>
                   </div>
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="visa_card">
                   <img src={Img.british_columbia_provincial_nominee_program} className="visa_img"></img>
                   <div className="visa_content">
                      <h3 className="visa_title">British Columbia Provincial Nominee Program</h3>
                      <p className="visa_para">Discover the beauty and possibilities of British Columbia with the British Columbia Provincial Nominee Program. It offers various categories, such as Skills Immigration, Express Entry BC, Entrepreneur Immigration... Read More</p>
                   </div>
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="visa_card">
                   <img src={Img.AINP} className="visa_img"></img>
                   <div className="visa_content">
                      <h3 className="visa_title">Alberta Immigrant Nominee Program (AINP)</h3>
                      <p className="visa_para">1. Set your sights on Alberta and its thriving labor market with the Alberta Immigrant Nominee Program. It offers different streams for skilled workers, international graduates, and self-employed individuals looking to make... Read More</p>
                   </div>
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="visa_card">
                   <img src={Img.SINP} className="visa_img"></img>
                   <div className="visa_content">
                      <h3 className="visa_title">Saskatchewan Immigrant Nominee Program (SINP)</h3>
                      <p className="visa_para">1. Discover the opportunities offered by the Saskatchewan Immigrant Nominee Program. It has various streams, including the International Skilled Worker Category, Saskatchewan Experience Category, and Entrepreneur... Read More</p>
                   </div>
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="visa_card">
                   <img src={Img.MPNP} className="visa_img"></img>
                   <div className="visa_content">
                      <h3 className="visa_title">Manitoba Provincial Nominee Program (MPNP)</h3>
                      <p className="visa_para">1. Explore the Manitoba Provincial Nominee Program, which offers pathways for skilled workers, international graduates, and entrepreneurs to settle and work in the province. The program includes streams such as Skilled Worker... Read More</p>
                   </div>
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="visa_card">
                   <img src={Img.NSNP} className="visa_img"></img>
                   <div className="visa_content">
                      <h3 className="visa_title">Nova Scotia Nominee Program (NSNP)</h3>
                      <p className="visa_para">Experience the charm of Nova Scotia through the Nova Scotia Nominee Program. It has streams for skilled workers, international graduates, and entrepreneurs, aiming to attract individuals who can contribute to the ... Read More</p>
                   </div>
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="visa_card">
                   <img src={Img.new_brunswick_provincial_nominee_program} className="visa_img"></img>
                   <div className="visa_content">
                      <h3 className="visa_title">New Brunswick Provincial Nominee Program</h3>
                      <p className="visa_para">Discover the opportunities available in New Brunswick through the New Brunswick Provincial Nominee Program. It has streams for skilled workers, entrepreneurs, and international graduates, providing pathways to...Read More</p>
                   </div>
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="visa_card">
                   <img src={Img.PEIPN} className="visa_img"></img>
                   <div className="visa_content">
                      <h3 className="visa_title">Prince Edward Island Provincial Nominee Program</h3>
                      <p className="visa_para">Explore the Prince Edward Island Provincial Nominee Program, designed to attract skilled workers, international graduates, and entrepreneurs to Prince Edward Island. It offers various streams, including Express Entry, Labor Impact, Business Impact, and the Atlantic Immigration Pilot Program.</p>
                   </div>
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="visa_card">
                   <img src={Img.NLPNP} className="visa_img"></img>
                   <div className="visa_content">
                      <h3 className="visa_title">Newfoundland and Labrador Provincial</h3>
                      <p className="visa_para">Discover the opportunities available through the Newfoundland and Labrador Provincial Nominee Program. This program is designed to attract skilled workers, entrepreneurs... Read More</p>
                   </div>
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="visa_card">
                   <img src={Img.YNP} className="visa_img"></img>
                   <div className="visa_content">
                      <h3 className="visa_title">Yukon Nominee Program (YNP)</h3>
                      <p className="visa_para">Experience the unique opportunities offered by the Yukon Nominee Program. This program aims to attract skilled workers, business owners, and individuals with connections to the Yukon territory. It has streams such.. Read More</p>
                   </div>
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="visa_card">
                   <img src={Img.NTNP} className="visa_img"></img>
                   <div className="visa_content">
                      <h3 className="visa_title">Northwest Territories Nominee Program</h3>
                      <p className="visa_para">Explore the opportunities offered by the Northwest Territories Nominee Program. This program aims to attract skilled workers, entrepreneurs, and individuals with connections to the Northwest Territories... Read More</p>
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
                   <img src={Img.NNP} className="visa_img"></img>
                   <div className="visa_content">
                      <h3 className="visa_title">Nunavut Nominee Program</h3>
                      <p className="visa_para">1. Explore the opportunities offered by the Nunavut Nominee Program, designed to attract skilled workers and entrepreneurs to the unique and vibrant territory of Nunavut. The program aims to address the specific labor market... Read More</p>
                   </div>
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="visa_card">
                   <img src={Img.card} className="visa_img"></img>
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
                  <li>We understand that each provincial program has its own specific requirements and processes.</li>
                  <li>Our team of experienced immigration professionals is well-versed in the details of each program and can guide you through the entire application process, ensuring you have the best chance of success in your Canadian immigration journey.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="contact_us_today_section">
           <div className="container-fluid">
              <div className="row align_item_center">
                <div className="col-md-12">
                  <h3 className="contact_us_today_text">Feel free to reach out to us for personalized support and guidance.</h3>
                  <a href="https://calendly.com/growingglobeimmigration">
                     <button className="video_book_appoint mt_10">Book An Appointment</button>
                  </a>
                </div>
              </div>
           </div>
        </div>

      <Footer />
    </div>
  );
}

export default Immigrate;
