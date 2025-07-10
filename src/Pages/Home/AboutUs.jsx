import react from "react";
import { Typography } from "../../Components/Typography/Typography";
import "./AboutUs.scss";
import gradientAboutUs from "../../Assets/gradientAboutUs.png";
import aboutUs from "../../Assets/about_us.png";
import { Button } from "../../Components/Button/Button";
import { button } from "framer-motion/client";
export const AboutUs = () => {
  return (
    <div className="aboutus">
      <div className="aboutus-container">
        <div>
          <Typography variant="h1" className="our1_text">
            {`WHO WE ARE?`.split("").map((char, idx) => (
              <span key={idx} className="char">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </Typography>
        </div>
        <div className="sub_title_container">
          <Typography variant="h5" className="Built_text">
            Built to Launch,
          </Typography>
          <Typography variant="h5" className="Structure0_text">
            Structured
          </Typography>
          {/* <Typography variant="h5" className="Structure_text">
          </Typography> */}
        </div>
        <Typography variant="h5" className="Structure0_text">
          to Scale.
        </Typography>

        <div>
          <Typography variant="h2" className="text2_container">
            Your Full-Stack GTM Partner for Web3, AI, and Emerging Tech
          </Typography>
        </div>
        <div>
          <Typography variant="h6" className="text3_container">
            GTM Labs is a full-stack growth and marketing agency helping
            Web3,AI, and Tech
            {/* <br /> */}
            <Typography>
              start-ups scale efficiently. From go-to-market strategy to
              post-funding execution,
            </Typography>
            {/* <br /> */}
            we serve as a committedpartner to help start-ups accelerate with
            clarity and confidence.
          </Typography>
          <div className="aboutus_button">
            <Button
              className="GettoKnowUs_button"
              text={
                <Typography className="GettoKnowUs_text">
                  Get to Know Us
                </Typography>
              }
            ></Button>
          </div>
        </div>
      </div>

      <div className="aboutus-image">
        <img src={aboutUs} alt="About Us" className="img_about" />
        <img
          src={gradientAboutUs}
          alt="gradientAboutUs"
          className="gardientClass"
        />
      </div>
    </div>
  );
};
