import React from "react";
import Header from "./header.js";
import Footer from "./footer.js";
import {Img} from "../Utilities/Icons.js";
import VideoPlayer from "react-background-video-player";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {Link} from 'react-router-dom';
import Video from '../Utilities/video.mp4';
import ScrollCarousel from 'scroll-carousel-react';
import img1 from "../Assets/img/test-1.jpeg";
import img2 from "../Assets/img/test2.jpeg";
import img3 from "../Assets/img/test3.png";
import img4 from "../Assets/img/test4.png";
import img5 from "../Assets/img/test5.jpeg";
import img6 from "../Assets/img/test6.png";
import img7 from "../Assets/img/test7.jpeg";
import img8 from "../Assets/img/test8.png";

function Home(){
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
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
        <div className="video_section animation">
          <div className="container-fluid">
            <div className="video_box">
              <VideoPlayer
                className="video"
                autoPlay={true}
                loop={true}
                controls={false}
                src={
                  Video
                }
              />
            </div>
            <div className="video_counter_box" autoPlay>
              <div className="row">
                <div className="col-md-12">
                  <div className="video_sec_counter_box">
                    <div className="video_sec_counter_box_inner">
                      <h3 className="video_sec_counter_title">1500+</h3>
                      <h5 className="video_sec_counter_subtitle">List of Approvals</h5>
                    </div>
                    <div className="video_sec_counter_box_inner">
                      <h3 className="video_sec_counter_title">300+</h3>
                      <h5 className="video_sec_counter_subtitle">Ongoing Files</h5>
                    </div>
                    <div className="video_sec_counter_box_inner">
                      <h3 className="video_sec_counter_title">48 Hours</h3>
                      <h5 className="video_sec_counter_subtitle">Current Processing Time*</h5>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="video_sec_counter_box">
                      <div>
                        <a href="https://calendly.com/growingglobeimmigration"><button className="video_book_appoint">Book An Appointment</button></a>
                      </div>
                      
                    </div>
                    <div className="col-md-12" className="text-center video_sec_counter_box">
                      <a href="#top" className="scrollTo">
                      <div class="indicator">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                         <span></span>
                      </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="immigrate_canada_section animation" id="top">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 animation">
                <h3 className="immigrate_canada_sec_title anm_mod full fast mb_25">Did you know that there are 129 ways to immigrate to canada?</h3>
              </div>
              <div className="col-md-12">
                <ScrollCarousel className="carousel"
                  autoplay={true}
                  smartSpeed = {true}>
                  <div>
                    <img src={Img.immigrate_canada_img_1} alt="" className="carousel_img"></img>
                    <div className="text-center">
                       <Link to="/visit_visa"> <h3 className="permanent_resident_visa_text anm_mod full fast">Visit Visa</h3></Link>
                      <Link to="/visit_visa"> <button className="learn_more_btn anm_mod full fast">Learn More</button></Link>
                    </div>
                  </div>
                  <div>
                    <img src={Img.immigrate_canada_img_2} alt="" className="carousel_img"></img>
                    <div className="text-center">
                       <Link to="/study_permit"> <h3 className="permanent_resident_visa_text anm_mod full fast">Study Permit</h3></Link>
                       <Link to="/study_permit"><button className="learn_more_btn anm_mod full fast">Learn More</button></Link>
                    </div>
                  </div>
                  <div>
                    <img src={Img.immigrate_canada_img_3} alt="" className="carousel_img"></img>
                    <div className="text-center">
                       <Link to="/work_visa"> <h3 className="permanent_resident_visa_text anm_mod full fast">Work Visa</h3></Link>
                       <Link to="/work_visa"><button className="learn_more_btn anm_mod full fast">Learn More</button></Link>
                    </div>
                  </div>
                  <div>
                    <img src={Img.immigrate_canada_img_4} alt="" className="carousel_img"></img>
                    <div className="text-center">
                       <Link to="/business_visa"> <h3 className="permanent_resident_visa_text anm_mod full fast">Business Visa</h3></Link>
                       <Link to="/business_visa"><button className="learn_more_btn anm_mod full fast">Learn More</button></Link>
                    </div>
                  </div>
                  <div>
                    <img src={Img.immigrate_canada_img_5} alt="" className="carousel_img"></img>
                    <div className="text-center">
                       <Link to="/immigrate"> <h3 className="permanent_resident_visa_text anm_mod full fast">Immigration</h3></Link>
                       <Link to="/immigrate"><button className="learn_more_btn anm_mod full fast">Learn More</button></Link>
                    </div>
                  </div>
                </ScrollCarousel>
              </div>
            </div>
          </div>
        </div>
        <div className="embark_section animation">
          <div className="container-fluid">
            <div className="row align_item_center">
              <div className="col-md-6 ">
                <img src={Img.book_appointment_day} className="embark_img" alt=""></img>
              </div>
              <div className="col-md-6">
                <div className="embark_scroll_container">
                  <div className="embark_scroll_content">
                    Embark on your journey to Canada with confidence by choosing GGI as your trusted immigration consultants. With our team of experienced Registered Canadian Immigration Consultants (RCICs) leading the way, we provide unparalleled expertise and personalized guidance to navigate the complex immigration process. Whether you’re a skilled professional, Embark on your journey to Canada with confidence by choosing GGI as your trusted immigration consultants. With our team of experienced Registered Canadian Immigration Consultants (RCICs) leading the way, we provide unparalleled expertise and personalized guidance to navigate the complex immigration process. Whether you’re a skilled professional, Embark on your journey to Canada with confidence by choosing GGI as your trusted immigration consultants. With our team of experienced Registered Canadian Immigration Consultants (RCICs) leading the way, we provide unparalleled expertise and personalized guidance to navigate the complex immigration process. Whether you’re a skilled professional, Embark on your journey to Canada with confidence by choosing GGI as your trusted immigration consultants. With our team of experienced Registered Canadian Immigration Consultants (RCICs) leading the way, we provide unparalleled expertise and personalized guidance to navigate the complex immigration process. Whether you’re a skilled professional,
                  </div>
                </div>
                <div className="embark_btn_box">
                  <a href="https://calendly.com/growingglobeimmigration">
                     <button className="embark_book_appoint anm_mod full fast">Book An Appointment</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="consultants_section animation">
          <div className="container-fluid">
            <center>
              <h2 className="consultants_sec_title anm_mod full fast">GROWING GLOBE IMMIGRATION HOLDS THE LARGEST NUMBER OF REGISTERED CANADIAN <br/>IMMIGRATION CONSULTANTS (RCICS) IN CANADA</h2>
            </center>
          </div>
          <div className="">
              <ScrollCarousel className="carousel"
              autoplay={true}
              smartSpeed = {true}>
                <div className="consult_img"><img src={Img.p1} className="consultants" alt=""></img></div>
                <div className="consult_img"><img src={Img.p2} className="consultants" alt=""></img></div>
                <div className="consult_img"><img src={Img.p3} className="consultants" alt=""></img></div>
                <div className="consult_img"><img src={Img.p4} className="consultants" alt=""></img></div>
                <div className="consult_img"><img src={Img.p5} className="consultants" alt=""></img></div>
                <div className="consult_img"><img src={Img.p6} className="consultants" alt=""></img></div>
                <div className="consult_img"><img src={Img.p7} className="consultants" alt=""></img></div>
                <div className="consult_img"><img src={Img.p8} className="consultants" alt=""></img></div>
              </ScrollCarousel>
              <center>
                <Link to="/team"><button className="meet_the_team_btn anm_mod full fast">Meet the Team</button></Link>
              </center>
          </div>
        </div>
        <div className="testimonials_sec">
          <div className="container-fluid">
            <section className="row testimonials animation">
            	<h2 className="anm_mod full fast">Testimonials</h2>
              <div className="blog-slider">
                <div className="blog-slider__wrp swiper-wrapper">
                  <div className="blog-slider__item swiper-slide">
                    <div className="blog-slider__img img_shadow">
                      <img src={img8} alt=""></img>
                    </div>
                    <div className="blog-slider__content">
                      <div className="blog-slider__title">Shriya Jain</div>
                      <div className="blog-slider__text">I found out about Growing Globe Immigration post COVID. Sargun has vast knowledge about the whole situation from his practical experience and guides you very well at every step. He also shared tips and things I should be doing before I land. I Would definitely recommend them to my friends and it’s a 5-star rating for me.</div>
                    </div>
                  </div>
                  <div className="blog-slider__item swiper-slide">
                    <div className="blog-slider__img ">
                      <img src={img2} alt=""></img>
                    </div>
                    <div className="blog-slider__content">
                      <div className="blog-slider__title">Piyush Miglani</div>
                      <div className="blog-slider__text">I applied through this immigration consultant for my wife’s spousal visa in January and before 6 months of completion got the passport request. everything went so smoothly during this process. We were a newly married couple and after only 3 months of separation got my spouse’s PR. Thank you Growing globe immigration.</div>
                    </div>
                  </div>

                  <div className="blog-slider__item swiper-slide">
                    <div className="blog-slider__img ">
                      <img src={img5} alt=""></img>
                    </div>
                    <div className="blog-slider__content">
                      <div className="blog-slider__title">Randeep Sidhu</div>
                      <div className="blog-slider__text">I recommend Growing globe immigration for any kind of immigration service. They listen to their Clients very patiently. I got my LMIA work permit approval this week which was very complicated. Of course, I will process my PR file with them as they are good and always give quick responses and keep Clint updated.</div>
                    </div>
                  </div>

                  <div className="blog-slider__item swiper-slide">
                    <div className="blog-slider__img ">
                      <img src={img3} alt=""></img>
                    </div>
                    <div className="blog-slider__content">
                      <div className="blog-slider__title">Akshay Singh</div>
                      <div className="blog-slider__text">7 months ago, I wouldn’t say I had all the documents ready when I approached Growing Globe Immigration to file my PR. This team gave me confidence and helped me step by step. They were prompt in communicating with me at all times and were on top of my document submissions on time. I owe it to them!</div>
                    </div>
                  </div>

                  <div className="blog-slider__item swiper-slide">
                    <div className="blog-slider__img ">
                      <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759871/alessandro-capuzzi-799180-unsplash.webp" alt=""></img>
                    </div>
                    <div className="blog-slider__content">
                      <div className="blog-slider__title">Sonia Gill</div>
                      <div className="blog-slider__text">Such a good experience to visit the growing globe immigration. Ms. Neetu explained to me very well about the process. She has a piece of good knowledge about immigration as my old experience was not good with other immigration companies but this consultancy changed my thoughts I want to start the procedure with them only.</div>
                    </div>
                  </div>

                  <div className="blog-slider__item swiper-slide">
                    <div className="blog-slider__img ">
                      <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759871/alessandro-capuzzi-799180-unsplash.webp" alt=""></img>
                    </div>
                    <div className="blog-slider__content">
                      <div className="blog-slider__title">Jarnail Singh</div>
                      <div className="blog-slider__text">I really want to appreciate the Growing Globe team for giving a positive response on my file because I was having a Refusal before I came to them. I was a truck driver in Dubai and now I am happy to say that I got a work permit in Ontario. Thank you GGI for the seamless assistance and understanding me.</div>
                    </div>
                  </div>

                  <div className="blog-slider__item swiper-slide">
                    <div className="blog-slider__img ">
                      <img src={img7} alt=""></img>
                    </div>
                    <div className="blog-slider__content">
                      <div className="blog-slider__title">Freya</div>
                      <div className="blog-slider__text">I really want to appreciate the Growing Globe team for giving a positive response on my file because I was having a Refusal before I came to them. I was a truck driver in Dubai and now I am happy to say that I got a work permit in Ontario. Thank you GGI for the seamless assistance and understanding me.</div>
                    </div>
                  </div>

                  <div className="blog-slider__item swiper-slide">
                    <div className="blog-slider__img ">
                      <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759871/alessandro-capuzzi-799180-unsplash.webp" alt=""></img>
                    </div>
                    <div className="blog-slider__content">
                      <div className="blog-slider__title">Atul Wankhade</div>
                      <div className="blog-slider__text">Three months before, my spouse's sponsorship application was get cancelled, then luckily I reached out to Mr. Vinay and Sargun. After the agreement, they asked me ONLY those docs, which are required, and my application is ready within 7 days to submit. I got positive news from them. They are professional and experienced in this field.</div>
                    </div>
                  </div>

                  <div className="blog-slider__item swiper-slide">
                    <div className="blog-slider__img ">
                      <img src={img1} alt=""></img>
                    </div>
                    <div className="blog-slider__content">
                      <div className="blog-slider__title">Gursagar Singh</div>
                      <div className="blog-slider__text">I was a former student in Canada 🇨🇦 and my work permit was about to expire. I am really grateful to Mr. Sargun as he helped me in renewing my work permit which was approved for another year and a half and also I received my provincial nomination for permanent residency. I would highly recommend him for all immigration needs.</div>
                    </div>
                  </div>

                  <div className="blog-slider__item swiper-slide">
                    <div className="blog-slider__img ">
                      <img src={img6} alt=""></img>
                    </div>
                    <div className="blog-slider__content">
                      <div className="blog-slider__title">Akanksha Sobti</div>
                      <div className="blog-slider__text">I had my outland sponsorship with some other lawyer! But he stopped picking up my call and attending to my concerns and inquiries then I came to know about sargun and Vinay. They were very prompt with their replies and extremely helpful. Highly recommend sargun and Vinay for any type of immigration help!</div>
                    </div>
                  </div>

                  <div className="blog-slider__item swiper-slide">
                    <div className="blog-slider__img ">
                      <img src={img4} alt=""></img>
                    </div>
                    <div className="blog-slider__content">
                      <div className="blog-slider__title">Aaliya Pathan</div>
                      <div className="blog-slider__text">Best place for all your immigration needs! Mr. Vinay and Sargun are knowledgeable and kind and you can count on them to get your work done in a prompt and professional manner. The process is convenient and transparent so you don’t feel left out. They make you feel comfortable and you can trust them completely.</div>
                    </div>
                  </div>

                </div>
                <div className="blog-slider__pagination"></div>
              </div>
            </section>
          </div>
        </div>
        <div className="newsletter_section">
          <div className="container-fluid">
            <div className="row align_item_center">
              <div className="col-md-12 animation">
                <h2 className="newsletter_section_title anm_mod full fast">Subscribe to Our Newsletter</h2>
                <h4 className="newsletter_section_subtitle anm_mod full fast">Crossing Borders: Navigating the Pathways of Global Journeys <br/> Stay Informed with Our Immigration Insights  </h4>
              </div>
              <div className="col-md-12 animation">
                <center>
                <div className="anm_mod full fast">
                  <form className="form" action="">
                    <input type="email" name="email" id="email" placeholder="example@example.com" />
                    <input type="submit" name="submit" value="subscribe" />
                  </form>
                </div>
                </center>
              </div>
            </div>
          </div>
        </div>
        <div className="book_appoint_section">
          <div className="container-fluid">
            <div className="row align_item_center">
              <div className="col-md-7 animation">
                <h4 className="book_appoint_section_title anm_mod full fast">
                  Discover the unparalleled expertise of GGI, a renowned institution in the field of immigration, boasting the highest concentration of Registered Canadian Immigration Consultants (RCICs) across Canada, offering comprehensive and trusted guidance for your immigration journey.
                </h4>
              </div>
              <div className="col-md-5 animation">
                <div className="book_appoint_box anm_mod full fast">
                  <a href="https://calendly.com/growingglobeimmigration">
                     <button className="book_appoint_appointment">Book An Appointment</button>
                  </a>
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
