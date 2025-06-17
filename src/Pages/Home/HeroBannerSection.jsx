import React from "react";
import "./HeroBanner.scss";
import { Typography } from "../../Components/Typography/Typography"; // Your reusable typography component
import { Button } from "../../Components/Button/Button"; // Your reusable button

export const HeroBanner = () => {
  return (
    <div className="hero-banner-container">
      <div className="hero-banner">
        <Typography variant="h1" className="hero-title">
          Scale Your Business with Expert Solutions
        </Typography>
        <div className="hero-content">
          <div className="hero-text">
            <Typography variant="h2" className="hero-subtitle">
              We provide comprehensive go-to-market strategies, development
              services, and talent solutions to accelerate your growth.
            </Typography>
          </div>
          <div className="hero-buttons">
            <div>
              <Button
                text={<Typography variant="h3">Schedule a Call</Typography>}
              />
            </div>
            <div>
              <Button
                text={<Typography className="learn_text" variant="h3">Learn More</Typography>}
                className="learn-button"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* <div>animation</div> */}
      </div>
    </div>
  );
};
