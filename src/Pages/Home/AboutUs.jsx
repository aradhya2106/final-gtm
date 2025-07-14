import React from "react";
import colabimage from "../../Assets/colabimage.png";
import { Button } from "../../Components/Button/Button";
import { Typography } from "../../Components/Typography/Typography";
import "./AboutUs.scss";

export const AboutUs = () => {
  return (
    <div className="aboutus_section">
      {/* Background Text */}
      <div className="background_text">
        <Typography variant="h3" className="who_we_are_bg">
          {"WHO WE ARE?".split("").map((char, idx) => (
            <span key={idx} className="char">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </Typography>
      </div>

      {/* Main Content */}
      <div className="aboutus_container">
        {/* Left Content */}
        <div className="aboutus_content">
          <div className="main_heading">
            <Typography variant="h4" className="built_text">
              Built To Launch,{" "}
              <span className="structured_text">Structured</span>
            </Typography>
            <Typography variant="h4" className="scale_text">
              To Scale.
            </Typography>
          </div>

          <Typography variant="h14" className="partner_subtitle">
            Your Full-Stack GTM Partner For Web3, AI, And Emerging Tech
          </Typography>

          <Typography variant="body" className="description_text">
            GTM Labs is a full-stack growth and marketing agency helping Web3,
            AI, and tech start-ups scale efficiently. From go-to-market strategy
            to post-funding execution, we serve as a committed partner to help
            start-ups accelerate with clarity and confidence.
          </Typography>

          <div className="cta_button">
            <Button
              className="know_us_button"
              text={
                <Typography variant="h2" className="button_text">
                  Get to Know Us
                </Typography>
              }
            />
          </div>
        </div>

        {/* Right Image */}
        <div className="aboutus_image">
          <img
            src={colabimage}
            alt="GTM Labs Collaboration"
            className="colab_image"
          />
        </div>
      </div>
    </div>
  );
};
