import React from "react";
import Header from "./header.js";
import Footer from "./footer.js";
import {Img} from "../Utilities/Icons.js";
import VideoPlayer from "react-background-video-player";

function Home(){
  return(
    <div>
      <Header />
        <div className="video_section">
          <div className="container-fluid">
            <div className="video_box">
              <VideoPlayer
                className="video"
                src={
                  "https://growingglobeimmigration.com/video/video.mp4"
                }
                autoPlay={true}
              />
            </div>
            <div className="video_counter_box">
              <div className="row">
                <div className="col-md-12">
                  <div className="video_sec_counter_box">
                    <div className="video_sec_counter_box_inner">
                      <h3 className="video_sec_counter_title">5000+</h3>
                      <h5 className="video_sec_counter_subtitle">List of Approvals</h5>
                    </div>
                    <div className="video_sec_counter_box_inner">
                      <h3 className="video_sec_counter_title">100+</h3>
                      <h5 className="video_sec_counter_subtitle">Ongoing Files</h5>
                    </div>
                    <div className="video_sec_counter_box_inner">
                      <h3 className="video_sec_counter_title">24 Hours</h3>
                      <h5 className="video_sec_counter_subtitle">Current Processing Time</h5>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="video_sec_counter_box">
                      <div>
                        <button className="video_book_appoint">Book An Appointment</button>
                      </div>
                      <div>
                        <button className="video_free_report">Create A Free Report</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="immigrate_canada_section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <h3 className="immigrate_canada_sec_title">DID YOU KNOW THAT THERE ARE 129 WAYS TO IMMIGRATE TO CANADA?</h3>
              </div>
            </div>
          
          </div>
        </div>
        <div className="embark_section">
          <div className="container-fluid">
            <div className="row align_item_center">
              <div className="col-md-6">
                <img src={Img.book_appointment_day} className="embark_img" alt=""></img>
              </div>
              <div className="col-md-6">
              <div className="embark_scroll_container">
                <div className="embark_scroll_content">
                  Embark on your journey to Canada with confidence by choosing GGI as your trusted immigration consultants. With our team of experienced Registered Canadian Immigration Consultants (RCICs) leading the way, we provide unparalleled expertise and personalized guidance to navigate the complex immigration process. Whether you’re a skilled professional, Embark on your journey to Canada with confidence by choosing GGI as your trusted immigration consultants. With our team of experienced Registered Canadian Immigration Consultants (RCICs) leading the way, we provide unparalleled expertise and personalized guidance to navigate the complex immigration process. Whether you’re a skilled professional, Embark on your journey to Canada with confidence by choosing GGI as your trusted immigration consultants. With our team of experienced Registered Canadian Immigration Consultants (RCICs) leading the way, we provide unparalleled expertise and personalized guidance to navigate the complex immigration process. Whether you’re a skilled professional, Embark on your journey to Canada with confidence by choosing GGI as your trusted immigration consultants. With our team of experienced Registered Canadian Immigration Consultants (RCICs) leading the way, we provide unparalleled expertise and personalized guidance to navigate the complex immigration process. Whether you’re a skilled professional,
                </div>
              </div>
                <div className="embark_btn_box">
                  <button className="embark_book_appoint">Book An Appointment</button>
                  <button className="embark_free_report">Create A Free Report</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="book_appoint_section">
          <div className="container-fluid">
            <div className="row align_item_center">
              <div className="col-md-7">
                <h4 className="book_appoint_section_title">
                  Discover the unparalleled expertise of GGI, a renowned institution in the field of immigration, boasting the highest concentration of Registered Canadian Immigration Consultants (RCICs) across Canada, offering comprehensive and trusted guidance for your immigration journey.
                </h4>
              </div>
              <div className="col-md-5">
                <div className="book_appoint_box">
                  <button className="book_appoint_learn_more">Learn More</button>
                  <button className="book_appoint_appointment">Book An Appointment</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      <Footer />
    </div>
  );
}

export default Home;
