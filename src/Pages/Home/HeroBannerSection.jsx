import React from "react";
import "./HeroBanner.scss";
import { Typography } from "../../Components/Typography/Typography";
import { Button } from "../../Components/Button/Button";

export const HeroBanner = () => {
  return (
    <div className="hero_banner">
      {/* Gradient background circles */}
      <div className="gradient_circle_left" />
      <div className="gradient_circle_right" />

      <div className="hero_banner_container">
        {/* Main Heading */}
        <Typography variant="h5" className="web_text">
          Web3. AI. <div className="Grow_text">Growth. Delivered.</div>
        </Typography>

        {/* Sub Heading */}
        <Typography variant="h5" className="hero_banner_text">
          We help future forward Start-ups build Traction, Community, and
          Revenue
          <br />
          with Full-Stack growth, Marketing, and Development services.
        </Typography>

        {/* Buttons */}
        <div className="hero_banner_button">
          <Button
            className="start_button"
            text={
              <Typography variant="h16" className="Start_text">
                Start Scaling
              </Typography>
            }
          />

          <Button
            className="work_button"
            text={
              <Typography variant="h2" className="MuiTypography-root">
                How It Works
              </Typography>
            }
          />
        </div>
      </div>
    </div>
  );
};
