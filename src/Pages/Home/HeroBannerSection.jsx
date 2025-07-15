import React from "react";
import { Button } from "../../Components/Button/Button";
import { Typography } from "../../Components/Typography/Typography";
import "./HeroBanner.scss";

export const HeroBanner = () => {
  const handleStartScaling = () => {
    window.open("https://calendly.com/gtmlabsxyz/consult", "_blank");
  };

  const handleScrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero_banner">
      {/* Gradient background circles */}
      <div className="gradient_circle_left" />
      <div className="gradient_circle_right" />

      <div className="hero_banner_container">
        {/* Strategy Section */}
        <div className="strategy_section">
          <Typography variant="h3" className="strategy_text">
            STRATEGY
          </Typography>
          <span className="strategy_dot">•</span>
          <Typography variant="h3" className="strategy_text">
            EXECUTION
          </Typography>
          <span className="strategy_dot">•</span>
          <Typography variant="h3" className="strategy_text">
            RESULTS
          </Typography>
        </div>

        {/* Main Heading */}
        <Typography variant="h1" className="web_text">
          Web3. AI. <span className="growth_text">Growth.</span>{" "}
          <span className="delivered_text">Delivered.</span>
        </Typography>

        {/* Sub Heading */}
        <Typography variant="h14" className="hero_banner_text">
          We help future forward Start-ups build Traction, Community, and
          Revenue
          <br />
          with Full-Stack growth, Marketing, and Development services.
        </Typography>

        {/* Buttons */}
        <div className="hero_banner_button">
          <Button
            className="start_button"
            onClick={handleStartScaling}
            text={
              <Typography variant="h2" className="start_text">
                Start Scaling
              </Typography>
            }
          />

          <Button
            className="work_button"
            onClick={handleScrollToServices}
            text={
              <Typography variant="h2" className="work_text">
                Our Services
              </Typography>
            }
          />
        </div>
      </div>
    </div>
  );
};
