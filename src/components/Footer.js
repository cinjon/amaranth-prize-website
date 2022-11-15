import React from "react";
import branding from "../assets/branding.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import { Link } from "react-router-dom";

export const Footer = () => {

  return (
    <div className="Footer">
      <div className="section section-primary">
        <div className="branding">
          <img src={branding} className="logo" alt="logo" />
        </div>
        <div className="flex-spacer" />
        <div className="content">
          <div className="content-section information">
            <p className="content-title">INFORMATION</p>
            <Link to={"/about"} className="navigation-link">ABOUT</Link>
            <Link to={"/winning-papers"} className="navigation-link">WINNING PAPERS</Link>
          </div>
          <div className="content-section research-portfolio">
            <p className="content-title">RESEARCH PORTFOLIO</p>
            <Link to={"/about"} className="navigation-link">ABOUT</Link>
            <Link to={"/winning-papers"} className="navigation-link">PRODUCT</Link>
          </div>
          <div className="content-section social">
            <p className="content-title">SOCIAL</p>
            <div className="social-links">
              <a href="https://twitter.com" target="_blank" className="social-link">
                <img src={twitter} alt="twitter"/>
              </a>
              <a href="https://linkedin.com" target="_blank" className="social-link">
                <img src={linkedin} alt="linkedin"/>
              </a>
              <a href="https://facebook.com" target="_blank" className="social-link">
                <img src={facebook} alt="facebook"/>
              </a>
              <a href="https://instagram.com" target="_blank" className="social-link">
                <img src={instagram} alt="instagram"/>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="section section-secondary">

      </div>
    </div>
  )

}
