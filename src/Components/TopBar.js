import React, { useEffect, useState } from "react";
import { Button } from "../../src/Components/Button/Button";
import { Typography } from "../../src/Components/Typography/Typography";
import gtmlogonew from "../Assets/gtmlogonew.png";
import Linkedin from "../Assets/Linkedinnew.png";
import "./TopBar.css";

const TopBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest(".topbar")) {
        closeMobileMenu();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Handle body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        closeMobileMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // X Logo SVG Component
  const XLogo = () => (
    <svg 
      width="22" 
      height="22" 
      viewBox="0 0 24 24" 
      fill="white" 
      className="x_logo"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );

  return (
    <div className="page_wrapper">
      <div className="header">
        <div className="topbar">
          <div className="topbar_container">
            <div className="topbar_content">
              <div className="logo">
                <img src={gtmlogonew} alt="Gtmlablogo" />
              </div>

              {/* Desktop Navigation */}
              <div className="nav_links desktop_nav">
                <div className="About_container">
                  <Typography variant="h3">ABOUT</Typography>
                </div>
                <div className="Service_container">
                  <Typography variant="h3">SERVICES</Typography>
                </div>
                <div className="Packages_container">
                  <Typography variant="h3">PACKAGES</Typography>
                </div>
                <div className="Blog_container">
                  <Typography variant="h3">BLOGS</Typography>
                </div>
                <div className="Contact_container">
                  <Typography variant="h3">CONTACT</Typography>
                </div>
              </div>

              {/* Desktop Social Section */}
              <div className="social_section desktop_social">
                <a href="https://x.com/gtmlabsxyz" target="_blank" rel="noopener noreferrer">
                  <XLogo />
                </a>
                <a href="https://www.linkedin.com/company/gtmlabspage/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                  <img className="linkedin" src={Linkedin} alt="Linkedin" />
                </a>
                <div className="button">
                  <Button
                    className="button_container"
                    text={
                      <Typography className="button_text" variant="h2">
                        Schedule a call
                      </Typography>
                    }
                  />
                </div>
              </div>

              {/* Mobile Hamburger Menu */}
              <div className="mobile_menu_toggle" onClick={toggleMobileMenu}>
                <span
                  className={`hamburger_line ${isMobileMenuOpen ? "open" : ""}`}
                ></span>
                <span
                  className={`hamburger_line ${isMobileMenuOpen ? "open" : ""}`}
                ></span>
                <span
                  className={`hamburger_line ${isMobileMenuOpen ? "open" : ""}`}
                ></span>
              </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div
              className={`mobile_nav_menu ${isMobileMenuOpen ? "open" : ""}`}
            >
              <div className="mobile_nav_links">
                <div className="mobile_nav_item" onClick={closeMobileMenu}>
                  <Typography variant="h3">ABOUT</Typography>
                </div>
                <div className="mobile_nav_item" onClick={closeMobileMenu}>
                  <Typography variant="h3">SERVICES</Typography>
                </div>
                <div className="mobile_nav_item" onClick={closeMobileMenu}>
                  <Typography variant="h3">PACKAGES</Typography>
                </div>
                <div className="mobile_nav_item" onClick={closeMobileMenu}>
                  <Typography variant="h3">BLOGS</Typography>
                </div>
                <div className="mobile_nav_item" onClick={closeMobileMenu}>
                  <Typography variant="h3">CONTACT</Typography>
                </div>
              </div>

              <div className="mobile_social_section">
                <a href="https://x.com/gtmlabsxyz" target="_blank" rel="noopener noreferrer">
                  <XLogo />
                </a>
                <a href="https://www.linkedin.com/company/gtmlabspage/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                  <img className="linkedin" src={Linkedin} alt="Linkedin" />
                </a>
              </div>

              <div className="mobile_cta_button">
                <Button
                  className="button_container mobile_button"
                  text={
                    <Typography className="button_text" variant="h2">
                      Schedule a call
                    </Typography>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;