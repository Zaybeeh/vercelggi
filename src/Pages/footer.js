import React from "react";
// import "./../Assets/vendor/bootstrap/js/bootstrap.bundle.min.js";
// import "./../Assets/vendor/aos/aos.js";
// import "./../Assets/vendor/glightbox/js/glightbox.min.js";
// import "./../Assets/vendor/purecounter/purecounter_vanilla.js";
// import "./../Assets/vendor/swiper/swiper-bundle.min.js";
// import "./../Assets/vendor/isotope-layout/isotope.pkgd.min.js";
// import "./../Assets/vendor/php-email-form/validate.js";
// import "./../Assets/js/swiper.min.js";
import {Logo, FooterImg} from "../Utilities/Icons.js";
import {Link} from 'react-router-dom';


function Footer(){
  return(
    <footer id="footer" class="footer">
      <div class="container-fluid">
        <div class="row gy-4">
          <div class="col-lg-3 col-md-12 footer-info">
            <center>
              <Link  class="logo align-items-center">
                <img src={Logo.footer_logo} alt=""></img>
              </Link>
            </center>
          </div>
          <div class="col-lg-2 col-6 footer-links">
            <h4>Quick Links</h4>
            <div className="flex_this">
              <ul>
                <li><Link to="/visit_visa">Visit Visa</Link></li>
                <li><Link to="/study_permit">study Permit</Link></li>
                <li><Link to="/work_visa">Work Visa</Link></li>
                <li><Link to="/business_visa">Business Visa</Link></li>
              </ul>
              <ul>
                <li><Link to="/immigrate">Immigration</Link></li>
                <li><Link to="/about_us">About Us</Link></li>
                <li><Link to="#portfolio">Contact Us</Link></li>
                <li><Link to="#portfolio">Blog</Link></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-2 col-6 footer-links">
            <h4>Contact</h4>
            <ul>
              <li><Link>Canada : +16477055403</Link></li>
              <li><Link>UAE : +971501328189</Link></li>
              <li><Link>India : 18008890542</Link></li>
            </ul>
          </div>
          <div class="col-lg-2 col-6 footer-links">
            <h4>Locations</h4>
            <div className="flex_this">
            <ul>
              <li><Link className="footer_subtitle">Canada</Link></li>
              <li><Link>Toronto </Link></li>
              <li><Link>Brampton</Link></li>
              <li><Link>ON Canada</Link></li>
              <li><Link className="footer_subtitle">UAE</Link></li>
            </ul>
            <ul>
              <li><Link className="footer_subtitle">India</Link></li>
              <li><Link>new Delhi</Link></li>
              <li><Link>Jalandhar</Link></li>
              <li><Link>Ahmedabad</Link></li>
            </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
            <div>
              <img src={FooterImg.footer_img4} className="footer_img" alt=""></img>
              <img src={FooterImg.footer_img} className="footer_img" alt=""></img>
              <img src={FooterImg.footer_img2} className="footer_img" alt=""></img>
              <img src={FooterImg.footer_img3} className="footer_img" alt=""></img>
            </div>

          </div>
        </div>
      </div>
      <div class="container-fluid mt-4">
        <div class="copyright">
          &copy; Copyright <strong><span>Growing Globe Immigration</span></strong>. All Rights Reserved | Designed by <a href="https://rajarshisolutions/">Rajarshi Solutions</a>
        </div>
      </div>

        <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>
      <script src='https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js'></script>
    </footer>
  );
}

export default Footer;
