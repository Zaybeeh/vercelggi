import React from "react";
import "./../Assets/css/style.css";
import "./../Assets/vendor/bootstrap/css/bootstrap.min.css";
import "./../Assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./../Assets/vendor/glightbox/css/glightbox.min.css";
import "./../Assets/vendor/swiper/swiper-bundle.min.css";
import "./../Assets/css/swiper.min.css";
import "./../Assets/css/main.css";
import "./../Assets/css/slider.css";
import "./../Assets/css/responsive.css";
import {Logo} from "../Utilities/Icons.js";
import {Link} from 'react-router-dom';


function Header(){
	return(
    <section>
      <section id="topbar" className="topbar d-flex align-items-center">
        <div className="container-fluid d-flex justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center topbar_title_box">
            <h3 className="topbar_title">News</h3>
          </div>
          <div className="social-links d-none d-md-flex align-items-center topbar_text_box">
            <div className="marquee_box">
              <marquee>
                <h3 className="topbar_text">Canada has just updated their latest policy regarding skilled workers. Working at GGI has become a skill & each member who works here. | Canada has just updated their latest policy regarding skilled workers. Working at GGI has become a skill & each member who works here. | Canada has just updated their latest policy regarding skilled workers. Working at GGI has become a skill & each member who works here.Canada has just updated their latest policy regarding skilled workers. Working at GGI has become a skill & each member who works here.</h3>
              </marquee>
            </div>
          </div>
        </div>
      </section>
      <header id="header" className="header d-flex align-items-center">
        <div className="container-fluid d-flex align-items-center justify-content-md-between">
          <Link to="/" className="logo d-flex align-items-center navbar_logo_box">
            <img src={Logo.logo} alt=""></img>
          </Link>
          <nav id="navbar" className="navbar navbar_nav_box">
            <ul>
              <li><Link to="#hero">Temporary Resident Visa</Link></li>
              <li><Link to="#about">Permanent Resident Visa</Link></li>
              <li><Link to="#services">Business Immigration</Link></li>
              <li><Link to="#portfolio">About</Link></li>
              <li className="dropdown"><Link to="#"><span>Blog</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>

              </li>
            </ul>
          </nav>

          <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
          <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

        </div>
      </header>
    </section>

  );
}

export default Header;
