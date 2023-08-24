import React from "react";
import "./../Assets/css/style.css";
import "./../Assets/css/responsive.css";
import "./../Assets/css/slider.css";
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
				 <div className="social-links d-md-flex align-items-center topbar_text_box">
					 <div className="marquee_box">
						 <marquee>
							 <h3 className="topbar_text">Canada has just updated their latest policy regarding skilled workers. Working at GGI has become a skill & each member who works here. | Canada has just updated their latest policy regarding skilled workers. Working at GGI has become a skill & each member who works here. | Canada has just updated their latest policy regarding skilled workers. Working at GGI has become a skill & each member who works here.Canada has just updated their latest policy regarding skilled workers. Working at GGI has become a skill & each member who works here.</h3>
						 </marquee>
					 </div>
				 </div>
			 </div>
		 </section>
		 <header id="header" className="header d-flex align-items-center">
			 <div className="container-fluid d-flex align-items-center justify-content-md-between mobile_nav">
				 <Link to="/" className="logo d-flex align-items-center navbar_logo_box">
					 <img src={Logo.logo} alt=""></img>
				 </Link>
				 <nav id="navbar" className="navbar navbar_nav_box">
					 <ul>
						 <li><Link to="/visit_visa">Visit Visa</Link></li>
						 <li><Link to="/study_permit">Study Permit</Link></li>
						 <li><Link to="/work_visa">Work Visa</Link></li>
						 <li><Link to="/business_visa">Business Visa</Link></li>
						 <li><Link to="/immigrate">Immigration</Link></li>
						 <li><Link to="/about_us">About Us</Link></li>
						 <li><Link to="/contactus">Contact Us</Link></li>
						 <li><Link to="/blogs">Blog</Link></li>

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
