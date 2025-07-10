import React from "react";
import { Typography } from "../../Components/Typography/Typography";
import send from "../../Assets/Send.png";
import "./Footer.scss";

export const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_links_section">
        <div className="footer_column">
          <Typography className="footer_heading">Quick Links</Typography>
          <ul>
            <li>
              <Typography>Home</Typography>
            </li>
            <li>
              <Typography>Features</Typography>
            </li>
            <li>
              <Typography>Community</Typography>
            </li>
            <li>
              <Typography>Support</Typography>
            </li>
          </ul>
        </div>
        <div className="footer_column">
          <Typography className="footer_heading">Help</Typography>
          <ul>
            <li>
              <Typography>Help</Typography>
            </li>
            <li>
              <Typography>FAQ</Typography>
            </li>
            <li>
              <Typography>Guides</Typography>
            </li>
            <li>
              <Typography>Forum</Typography>
            </li>
          </ul>
        </div>
        <div className="footer_column">
          <Typography className="footer_heading">Social Media</Typography>
          <ul>
            <li>
              <Typography>Facebook</Typography>
            </li>
            <li>
              <Typography>Instagram</Typography>
            </li>
            <li>
              <Typography>LinkedIn</Typography>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer_newsletter">
        <Typography className="footer_heading">
          Join our mailing list for updates
        </Typography>
        <div className="newsletter_input">
          <input type="email" placeholder="Your email address" />
          <button>
            <img src={send} alt="Send" />
          </button>
        </div>
      </div>
    </div>
  );
};
