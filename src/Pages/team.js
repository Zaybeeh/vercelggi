import React from "react";
import Header from "./header.js";
import Footer from "./footer.js";
import {Img} from "../Utilities/Icons.js";

function Team(){
  return(
    <div>
      <Header />
        <div className="team_section">
          <div className="container-fluid">
            <div className="row mb_50">
              <div className="col-md-12">
                <center>
                  <h2 className="team_title">UNLOCKING CANADA’S POTENTIAL:<br/> DISCOVER GGI’S IMPRESSIVE TEAM <br/>OF 13 RCICS</h2>
                </center>
              </div>
            </div>
            <div className="team_card_box">
              <div className="row">
                <div className="col-md-6">
                  <div className="team_card">
                    <div className="team_card_inner_1">
                      <center>
                        <div class="image-container">
                          <img alt="" src={Img.team_1} className="team_card_img"></img>
                          <div class="opacity-layer"></div>
                        </div>
                        <h5 className="team_card_name">Vinay Sachdeva</h5>
                      </center>
                    </div>
                    <div className="team_card_inner_2">
                      <h3 className="team_card_type">LANGUAGES</h3>
                      <h5 className="team_card_type_name"></h5>
                      <h3 className="team_card_experience">YEARS OF EXPERIENCE: <span className="team_card_experience_box"> 15</span></h3>
                      <button className="team_card_appointment">BOOK AN APPOINTMENT</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="team_card">
                    <div className="team_card_inner_1">
                      <center>
                        <div class="image-container">
                          <img alt="" src={Img.team_2} className="team_card_img"></img>
                          <div class="opacity-layer"></div>
                        </div>
                        <h5 className="team_card_name">Tabinda Khan</h5>
                      </center>
                    </div>
                    <div className="team_card_inner_2">
                      <h3 className="team_card_type">LANGUAGES</h3>
                      <h5 className="team_card_type_name">
                        <ul>
                          <li>English</li>
                          <li>Hindi </li>
                          <li>urdu</li>
                        </ul>
                      </h5>
                      <h3 className="team_card_experience">YEARS OF EXPERIENCE: <span className="team_card_experience_box"> 2</span></h3>
                      <button className="team_card_appointment">BOOK AN APPOINTMENT</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt_30">
                <div className="col-md-6">
                  <div className="team_card">
                    <div className="team_card_inner_1">
                      <center>
                        <div class="image-container">
                          <img alt="" src={Img.team_3} className="team_card_img"></img>
                          <div class="opacity-layer"></div>
                        </div>
                        <h5 className="team_card_name">Amandeep Kaur</h5>
                      </center>
                    </div>
                    <div className="team_card_inner_2">
                      <h3 className="team_card_type">LANGUAGES</h3>
                      <h5 className="team_card_type_name">
                      <ul>
                        <li>English</li>
                        <li>Hindi </li>
                        <li>Punjabi</li>
                        <li>Urdu</li>
                        </ul>
                      </h5>
                      <h3 className="team_card_experience">YEARS OF EXPERIENCE: <span className="team_card_experience_box"> 5</span></h3>
                      <button className="team_card_appointment">BOOK AN APPOINTMENT</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="team_card">
                    <div className="team_card_inner_1">
                      <center>
                        <div class="image-container">
                          <img alt="" src={Img.team_4} className="team_card_img"></img>
                          <div class="opacity-layer"></div>
                        </div>
                        <h5 className="team_card_name">Victoria</h5>
                      </center>
                    </div>
                    <div className="team_card_inner_2">
                      <h3 className="team_card_type">LANGUAGES</h3>
                      <h5 className="team_card_type_name">Leadership</h5>
                      <h3 className="team_card_experience">YEARS OF EXPERIENCE: <span className="team_card_experience_box"> 15</span></h3>
                      <button className="team_card_appointment">BOOK AN APPOINTMENT</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt_30">
                <div className="col-md-6">
                  <div className="team_card">
                    <div className="team_card_inner_1">
                      <center>
                          <div class="image-container">
                            <img alt="" src={Img.team_5} className="team_card_img"></img>
                            <div class="opacity-layer"></div>
                          </div>
                        <h5 className="team_card_name">Umer Sheikh</h5>
                      </center>
                    </div>
                    <div className="team_card_inner_2">
                      <h3 className="team_card_type">LANGUAGES</h3>
                      <h5 className="team_card_type_name">
                        <ul>
                          <li>English</li>
                          <li>Hindi</li>
                          <li>Punjabi</li>
                        </ul>
                      </h5>
                      <h3 className="team_card_experience">YEARS OF EXPERIENCE: <span className="team_card_experience_box"> 2</span></h3>
                      <button className="team_card_appointment">BOOK AN APPOINTMENT</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="team_card">
                    <div className="team_card_inner_1">
                      <center>
                        <div class="image-container">
                          <img alt="" src={Img.team_6} className="team_card_img"></img>
                          <div class="opacity-layer"></div>
                        </div>
                        <h5 className="team_card_name">Bhavuk Arora</h5>
                      </center>
                    </div>
                    <div className="team_card_inner_2">
                      <h3 className="team_card_type">LANGUAGES</h3>
                      <h5 className="team_card_type_name">
                        <ul>
                          <li>English</li>
                          <li>Hindi</li>
                        </ul>
                      </h5>
                      <h3 className="team_card_experience">YEARS OF EXPERIENCE: <span className="team_card_experience_box"> 4</span></h3>
                      <button className="team_card_appointment">BOOK AN APPOINTMENT</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt_30">
                <div className="col-md-6">
                  <div className="team_card">
                    <div className="team_card_inner_1">
                      <center>
                        <div class="image-container">
                          <img alt="" src={Img.team_7} className="team_card_img"></img>
                          <div class="opacity-layer"></div>
                        </div>
                        <h5 className="team_card_name">Harinder Kahlon</h5>
                      </center>
                    </div>
                    <div className="team_card_inner_2">
                      <h3 className="team_card_type">LANGUAGES</h3>
                      <h5 className="team_card_type_name">Leadership</h5>
                      <h3 className="team_card_experience">YEARS OF EXPERIENCE: <span className="team_card_experience_box"> 15</span></h3>
                      <button className="team_card_appointment">BOOK AN APPOINTMENT</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="team_card">
                    <div className="team_card_inner_1">
                      <center>
                        <div class="image-container">
                          <img alt="" src={Img.team_8} className="team_card_img"></img>
                          <div class="opacity-layer"></div>
                        </div>
                        <h5 className="team_card_name">Sultan Singh Rana</h5>
                      </center>
                    </div>
                    <div className="team_card_inner_2">
                      <h3 className="team_card_type">LANGUAGES</h3>
                      <h5 className="team_card_type_name">
                        <ul>
                          <li>English</li>
                          <li>Hindi</li>
                          <li>Punjabi</li>
                          <li>Urdu</li>
                        </ul>
                      </h5>
                      <h3 className="team_card_experience">YEARS OF EXPERIENCE: <span className="team_card_experience_box"> 3</span></h3>
                      <button className="team_card_appointment">BOOK AN APPOINTMENT</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt_30">
                <div className="col-md-6">
                  <div className="team_card">
                    <div className="team_card_inner_1">
                      <center>
                        <div class="image-container">
                          <img alt="" src={Img.team_9} className="team_card_img"></img>
                          <div class="opacity-layer"></div>
                        </div>
                        <h5 className="team_card_name">Piyush Jain</h5>
                      </center>
                    </div>
                    <div className="team_card_inner_2">
                      <h3 className="team_card_type">LANGUAGES</h3>
                      <h5 className="team_card_type_name">
                        <ul>
                          <li>English</li>
                          <li>Hindi</li>
                          <li>Punjabi</li>
                        </ul>
                      </h5>
                      <h3 className="team_card_experience">YEARS OF EXPERIENCE: <span className="team_card_experience_box"> 4</span></h3>
                      <button className="team_card_appointment">BOOK AN APPOINTMENT</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="team_card">
                    <div className="team_card_inner_1">
                      <center>
                        <div class="image-container">
                          <img alt="" src={Img.team_10} className="team_card_img"></img>
                          <div class="opacity-layer"></div>
                        </div>
                        <h5 className="team_card_name">Simer Gill</h5>
                      </center>
                    </div>
                    <div className="team_card_inner_2">
                      <h3 className="team_card_type">LANGUAGES</h3>
                      <h5 className="team_card_type_name">Leadership</h5>
                      <h3 className="team_card_experience">YEARS OF EXPERIENCE: <span className="team_card_experience_box"> 15</span></h3>
                      <button className="team_card_appointment">BOOK AN APPOINTMENT</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt_30">
                <div className="col-md-6">
                  <div className="team_card">
                    <div className="team_card_inner_1">
                      <center>
                        <div class="image-container">
                          <img alt="" src={Img.team_11} className="team_card_img"></img>
                          <div class="opacity-layer"></div>
                        </div>
                        <h5 className="team_card_name">Tamanna Mudgal</h5>
                      </center>
                    </div>
                    <div className="team_card_inner_2">
                      <h3 className="team_card_type">LANGUAGES</h3>
                      <h5 className="team_card_type_name">Leadership</h5>
                      <h3 className="team_card_experience">YEARS OF EXPERIENCE: <span className="team_card_experience_box"> 15</span></h3>
                      <button className="team_card_appointment">BOOK AN APPOINTMENT</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="team_card">
                    <div className="team_card_inner_1">
                      <center>
                        <div class="image-container">
                          <img alt="" src={Img.team_12} className="team_card_img"></img>
                          <div class="opacity-layer"></div>
                        </div>
                        <h5 className="team_card_name">Sukhwinder Singh</h5>
                      </center>
                    </div>
                    <div className="team_card_inner_2">
                      <h3 className="team_card_type">LANGUAGES</h3>
                      <h5 className="team_card_type_name">
                        <ul>
                          <li>English</li>
                          <li>Hindi</li>
                          <li>Punjabi</li>
                        </ul>
                      </h5>
                      <h3 className="team_card_experience">YEARS OF EXPERIENCE: <span className="team_card_experience_box"> 2</span></h3>
                      <button className="team_card_appointment">BOOK AN APPOINTMENT</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt_30">
                <div className="col-md-6">
                  <div className="team_card">
                    <div className="team_card_inner_1">
                      <center>
                        <div class="image-container">
                          <img alt="" src={Img.team_13} className="team_card_img"></img>
                          <div class="opacity-layer"></div>
                        </div>
                        <h5 className="team_card_name">Ebhote Francis</h5>
                      </center>
                    </div>
                    <div className="team_card_inner_2">
                      <h3 className="team_card_type">LANGUAGES</h3>
                      <h5 className="team_card_type_name">
                        <ul>
                          <li>English</li>
                          <li>Esan</li>
                          <li>Yoruba</li>
                        </ul>
                      </h5>
                      <h3 className="team_card_experience">YEARS OF EXPERIENCE: <span className="team_card_experience_box"> 11</span></h3>
                      <button className="team_card_appointment">BOOK AN APPOINTMENT</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="team_card">
                    <div className="team_card_inner_1">
                      <center>
                        <div class="image-container">
                          <img alt="" src={Img.team_14} className="team_card_img"></img>
                          <div class="opacity-layer"></div>
                        </div>
                        <h5 className="team_card_name">Karan Suri</h5>
                      </center>
                    </div>
                    <div className="team_card_inner_2">
                      <h3 className="team_card_type">LANGUAGES</h3>
                      <h5 className="team_card_type_name">
                        <ul>
                          <li>English</li>
                          <li>Hindi</li>
                          <li>Punjabi</li>
                        </ul>
                      </h5>
                      <h3 className="team_card_experience">YEARS OF EXPERIENCE: <span className="team_card_experience_box"> 7</span></h3>
                      <button className="team_card_appointment">BOOK AN APPOINTMENT</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mt_30">
                <div className="col-md-6">
                  <div className="team_card">
                    <div className="team_card_inner_1">
                      <center>
                        <div class="image-container">
                          <div class="opacity-layer"></div>
                        </div>
                        <h5 className="team_card_name">Parminder Singh Chahal</h5>
                      </center>
                    </div>
                    <div className="team_card_inner_2">
                      <h3 className="team_card_type">LANGUAGES</h3>
                      <h5 className="team_card_type_name">
                        <ul>
                          <li>English</li>
                          <li>Hindi</li>
                          <li>Punjabi</li>
                          <li>Marathi</li>
                        </ul>
                      </h5>
                      <h3 className="team_card_experience">YEARS OF EXPERIENCE: <span className="team_card_experience_box">4</span></h3>
                      <button className="team_card_appointment">BOOK AN APPOINTMENT</button>
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

export default Team;
