import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <section className="container">
  <div className="row">
  <div className="Footer">
        <div className="footer-bottom">
          <div className="footer-column col-lg-3 col-md-6 col-sm-9">
            <div className="footer-left">
              <h4>FlexiBlog</h4>
              <p>© 2025, All Rights Reserved.</p>
              <p>
                Powered By <strong>Gatsby</strong>
              </p>
            </div>
          </div>
          <div className="footer-column col-lg-3 col-md-6 col-sm-9">
            <div>
              <h5>Quick Links</h5>
              <ul>
                <li>Advertise with us</li>
                <li>About Us</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="footer-column col-lg-3 col-md-6 col-sm-9">
            <div>
              <h5>Legal Stuff</h5>
              <ul>
                <li>Privacy Notice</li>
                <li>Cookie Policy</li>
                <li>Terms Of Use</li>
              </ul>
            </div>
          </div>
          <div className="footer-column col-lg-3 col-md-6 col-sm-9">
            <div>
              <h5>Social Media</h5>
              <ul>
                <li>GitHub</li>
                <li>Twitter</li>
                <li>Instagram</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  </div>
    </section>
  );
};

export default Footer;
