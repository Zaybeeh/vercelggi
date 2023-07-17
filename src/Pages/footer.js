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
            <ul>
              <li><Link>Permanent Resident Visa</Link></li>
              <li><Link>Temporary Resident Visa</Link></li>
              <li><Link>Business Immigration</Link></li>
              <li><Link>Resettlement </Link></li>
            </ul>
          </div>
          <div class="col-lg-2 col-6 footer-links">
            <h4>Contact</h4>
            <ul>
              <li><Link>Permanent Resident Visa</Link></li>
              <li><Link>Temporary Resident Visa</Link></li>
              <li><Link>Business Immigration</Link></li>
              <li><Link>Resettlement </Link></li>
            </ul>
          </div>
          <div class="col-lg-2 col-6 footer-links">
            <h4>Locations</h4>
            <ul>
              <li><Link>Permanent Resident Visa</Link></li>
              <li><Link>Temporary Resident Visa</Link></li>
              <li><Link>Business Immigration</Link></li>
              <li><Link>Resettlement </Link></li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
            <div>
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

    </footer>
  );
}

export default Footer;
