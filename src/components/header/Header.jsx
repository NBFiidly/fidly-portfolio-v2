import React, { useEffect, useState } from "react";
import "./header.css";

const Header = () => {
  /*======================== Change Background Header ========================*/
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (window.scrollY >= 80) header?.classList.add("scroll-header");
      else header?.classList.remove("scroll-header");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  /*======================== Toggle Meu ========================*/
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          Fidly
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => {
                  setActiveNav("#home");
                  showMenu(false);
                }}
                className={
                  activeNav === "#home" ? "nav__link active__link" : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                onClick={() => {
                  setActiveNav("#about");
                  showMenu(false);
                }}
                className={
                  activeNav === "#about" ? "nav__link active__link" : "nav__link"
                }
              >
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => {
                  setActiveNav("#skills");
                  showMenu(false);
                }}
                className={
                  activeNav === "#skills" ? "nav__link active__link" : "nav__link"
                }
              >
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#services"
                onClick={() => {
                  setActiveNav("#services");
                  showMenu(false);
                }}
                className={
                  activeNav === "#services" ? "nav__link active__link" : "nav__link"
                }
              >
                <i className="uil uil-briefcase-alt nav__icon"></i> Services
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() => {
                  setActiveNav("#portfolio");
                  showMenu(false);
                }}
                className={
                  activeNav === "#portfolio" ? "nav__link active__link" : "nav__link"
                }
              >
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => {
                  setActiveNav("#contact");
                  showMenu(false);
                }}
                className={
                  activeNav === "#contact" ? "nav__link active__link" : "nav__link"
                }
              >
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
          </ul>

          <button
            type="button"
            className="nav__close"
            aria-label="Close navigation"
            onClick={() => showMenu(false)}
          >
            <i className="uil uil-times"></i>
          </button>
        </div>

        <button
          type="button"
          className="nav__toggle"
          aria-label="Open navigation"
          aria-expanded={Toggle}
          onClick={() => showMenu(!Toggle)}
        >
          <i className="uil uil-apps"></i>
        </button>
      </nav>
    </header>
  );
};

export default Header;
