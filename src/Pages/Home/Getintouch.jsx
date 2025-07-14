import React from "react";
import Callicon from "../../Assets/Callicon.png";
import Emailicon from "../../Assets/Emailicon.png";
import gtmlogonew from "../../Assets/gtmlogonew.png";
import Locationicon from "../../Assets/Locationicon.png";
import { Button } from "../../Components/Button/Button";
import { Typography } from "../../Components/Typography/Typography";
import "./Getintouch.scss";

export const Getintouch = () => {
  return (
    <div className="getintouch_section">
      {/* Header Section */}
      <div className="getintouch_header">
        <Typography variant="h4" className="main_title">
          Get In Touch
        </Typography>
        <Typography variant="body" className="subtitle">
          Ready to start your project? Let's talk.
        </Typography>
      </div>

      {/* Main Content */}
      <div className="getintouch_content">
        {/* Left Section - Contact Information */}
        <div className="contact_section">
          <div className="contact_info">
            <Typography variant="h6" className="contact_title">
              Contact Information
            </Typography>

            <div className="contact_item">
              <img src={Emailicon} alt="Email" className="contact_icon" />
              <Typography variant="body" className="contact_text">
                contact@gtmlabs.xyz
              </Typography>
            </div>

            <div className="contact_item">
              <img src={Callicon} alt="Phone" className="contact_icon" />
              <Typography variant="body" className="contact_text">
                +91 7011844199
              </Typography>
            </div>

            <div className="contact_item">
              <img src={Locationicon} alt="Location" className="contact_icon" />
              <Typography variant="body" className="contact_text">
                Gurugram, Delhi NCR
              </Typography>
            </div>
          </div>

          {/* Logo Section */}
          <div className="logo_section">
            <img src={gtmlogonew} alt="GTM Labs" className="company_logo" />
          </div>
        </div>

        {/* Right Section - Schedule a Call */}
        <div className="schedule_section">
          <div className="schedule_card">
            <Typography variant="h6" className="schedule_title">
              Schedule a Call
            </Typography>

            <div className="duration_section">
              <Typography variant="body" className="section_label">
                How long do you need
              </Typography>
              <div className="duration_buttons">
                <Button className="duration_btn">
                  <span className="duration_text">15 mins</span>
                </Button>
                <Button className="duration_btn">
                  <span className="duration_text">30 mins</span>
                </Button>
                <Button className="duration_btn">
                  <span className="duration_text">1 hour</span>
                </Button>
              </div>
            </div>

            <div className="time_section">
              <Typography variant="body" className="section_label">
                What time works best?
              </Typography>
              <Typography variant="caption" className="date_info">
                Showing times for June 18,2025
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
