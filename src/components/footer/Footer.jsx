import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Fidly</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Project
            </a>
          </li>

          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/"
            className="footer__social-link"
            target=""
          >
            <i class="bx bxl-instagram"></i>
          </a>

          <a
            href="https://www.tiktok.com/"
            className="footer__social-link"
            target=""
          >
            <i class="bx bxl-tiktok"></i>
          </a>

          <a
            href="https://www.twitter.com/"
            className="footer__social-link"
            target=""
          >
            <i class="bx bxl-twitter"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; FunixBercoding. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
