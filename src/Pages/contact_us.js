import React from "react";
import Header from "./header.js";
import Footer from "./footer.js";
import {Img} from "../Utilities/Icons.js";


function ContactUs(){
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
          <img src={Img.contactus_banner} className="banner_img" alt=""></img>
          <div className="banner_content">
              <a href="https://calendly.com/growingglobeimmigration">
                 <button className="embark_book_appoint">Book An Appointment</button>
              </a>
          </div>
        </div>
        <div className="contact_section">
          <div className="container">
            <div className="row">
              <div class="col-md-12">
                <h2 className="contact_section_title">Contact Us</h2>
              </div>
            </div>
            <div className="row ">
              <div class="col-md-4">
                <div class="contact-card contact-card-contact">
                  <div class="contact-card-image">
                    <img class="img" src={Img.contact_canada} ></img>
                  </div>
                  <div class="contact-table">
                    <h4 class="contact-card-caption mb_30">
                      Canada Offices
                    </h4>
                    <p class="contact-card-description">99 Yorkville Avenue, Suite 200, Toronto, ON Canada M5R 1C1</p>
                    <p class="contact-card-description">Phone No.: +1 647 705 5403</p>
                    <br/>
                    <p class="contact-card-description">2 County Court Blvd, Suite 215, Brampton, ON Canada L6W 3W8</p>
                    <p class="contact-card-description">Phone No.: +1 647 705 5403</p>
                    <br/>
                    <p class="contact-card-description">218 Export Blvd Mississauga Suite 301</p>
                    <p class="contact-card-description">Phone No.: +1 647 705 5403</p>
                    <br/>
                    <p class="contact-card-description">2 Robert speck parkways, Suite 732,Mississauga, Ontario</p>
                    <br/>
                    <p class="contact-card-description">4907 52 Ave, Whitecourt, Alberta</p>
                    <p class="contact-card-description">Phone No.: +1(437) 770-7953, +1(647) 207-6121</p>


                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="contact-card contact-card-contact">
                  <div class="contact-card-image">
                    <img class="img" src={Img.contact_india} ></img>
                  </div>
                  <div class="contact-table">
                    <h4 class="contact-card-caption mb_30">
                      India Offices
                    </h4>

                    <p class="contact-card-description">Second Floor, 33 Ajay Tower, Wazirpur, New Delhi 110052</p>
                    <p class="contact-card-description">Phone No. : 1800-889-0542</p>
                    <br/>
                    <p class="contact-card-description">Shop no. 5 AGI Business center, Ground floor, near bus stand, Jalandhar, punjab</p>
                    <p class="contact-card-description">Phone No.: 1800-889-0542</p>
                    <br/>
                    <p class="contact-card-description">304 Shakti Extol, Nr Zydus Hospital, Thaltej, Ahmedabad 380054</p>
                    <p class="contact-card-description">Phone No.: 1800-889-0542</p>

                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="contact-card contact-card-contact">
                  <div class="contact-card-image">
                    <img class="img" src={Img.contact_uae} ></img>
                  </div>
                  <div class="contact-table">
                    <h4 class="contact-card-caption mb_30">
                      UAE Offices
                    </h4>

                    <p class="contact-card-description">Office No. 1, Unit 2102, 21st Floor Metropolis Tower Al Abraj Street, Dubai, UAE</p>
                    <p class="contact-card-description">Phone No. : +971 50 132 8189</p>
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


export default ContactUs;
