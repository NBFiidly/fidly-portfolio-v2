import React, { useEffect } from "react";
import "./scrollup.css";

const ScrollUp = ({ href = "#home", label = "Kembali ke atas" }) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollUp = document.querySelector(".scrollup");
      if (window.scrollY >= 560) scrollUp?.classList.add("show-scroll");
      else scrollUp?.classList.remove("show-scroll");
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a href={href} className="scrollup" aria-label={label}>
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
};

export default ScrollUp;
