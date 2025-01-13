import React from "react";
import "../../styles/layout/Footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <section className="footer-container">
        <div className="box">
          <p>Connect with me and get the best for your firm</p>
          <div className="socialIcons">
            <i className="fab fa-facebook-f" aria-label="Facebook"></i>
            <i className="fab fa-instagram" aria-label="Instagram"></i>
            <i className="fab fa-twitter" aria-label="Twitter"></i>
            <i className="fab fa-youtube" aria-label="YouTube"></i>
            <i className="fab fa-pinterest" aria-label="Pinterest"></i>
            <i className="fab fa-dribbble" aria-label="Dribbble"></i>
          </div>
        </div>

        <div className="box">
          <h2>Quick Links</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>News</li>
            <li>Contact</li>
            <li>FAQ's</li>
          </ul>
        </div>

        <div className="box">
          <h2>Recent Posts</h2>
          <div>
            <p>Why Bill Gates Visits Kenya</p>
            <span>28 Feb 2022</span>
          </div>
          <div>
            <p>Why Bill Gates Visits Kenya</p>
            <span>28 Feb 2022</span>
          </div>
          <div>
            <p>Why Bill Gates Visits Kenya</p>
            <span>28 Feb 2022</span>
          </div>
        </div>

        <div className="box">
          <h2>Get in Touch</h2>
          <div className="icon">
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            <label>Location: 87 Division, Kikuyu Sub, Kiambu County, Nairobi, Kenya</label>
          </div>
          <div className="icon">
            <i className="fa fa-phone" aria-hidden="true"></i>
            <label>+254702035351</label>
          </div>
          <div className="icon">
            <i className="fa fa-envelope" aria-hidden="true"></i>
            <label>Email: Essayacademy@gmail.com</label>
          </div>
        </div>
      </section>

      <section className="legal">
        <p>Copyright @2023. All rights reserved.</p>
        <label>
          Designed and Developed by <span>MelvinDev</span>
        </label>
      </section>
    </footer>
  );
};

export default Footer;
