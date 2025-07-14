import React from "react";
import "./ServicePackages.scss";
// import { Container } from "../../Components/Container/Container";
import { Typography } from "../../Components/Typography/Typography";
import { Container } from "../../Components/Continer/Continer";
import { Button } from "../../Components/Button/Button";
import ticimage from "../../Assets/ticimage.png"
export const ServicePackages = () => {
    return (
      <div className="servicepackage">
        <div className="servicepackage-container">
          <div>
            <Typography variant="h17" className="servicepackage_text">
              {`SERVICE PACKAGES`.split("").map((char, idx) => (
                <span key={idx} className="char">
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </Typography>
          </div>
          <div className="sub_itle_container">
            <Typography variant="h9" className="subtitle_text">
              Choose a Plan That Fits
              <Typography variant="h9" className="your_text">
                Your
                <Typography variant="h9" className="Structure_text">
                  Growth Stage
                </Typography>
              </Typography>
            </Typography>
          </div>
        </div>
        <div>
          <div className="all_container">
            <div className="servicecontainer">
              <Container className="servicepackage_card_container">
                <Typography variant="h7" className="title1_button">
                  <h2>Starter</h2>
                </Typography>
                <Typography className="Head_text">
                  <Typography variant="h8" className="price_text">
                    <b>$999</b>{" "}
                  </Typography>
                  <Typography variant="h6" className="">
                    <img className="image" src={ticimage} alt="" />
                    Basic consultation
                  </Typography>
                  <Typography variant="h6">
                    <img className="image" src={ticimage} alt="" />
                    Strategy planning
                    <Typography variant="h6">
                      <img className="image" src={ticimage} alt="" />
                      Email support
                    </Typography>
                  </Typography>
                  <Button
                    className="get_container"
                    text={
                      <Typography className="text_button" variant="h2">
                        Get Started
                      </Typography>
                    }
                  />
                </Typography>
              </Container>
            </div>
            <div className="servicecontainer">
              <Container className="servicepackage_card_container">
                <Typography variant="h7" className="title1_button">
                  <h2>Professional</h2>
                </Typography>
                <Typography className="Head_text">
                  <Typography variant="h8" className="price_text">
                    <b>$2999</b>{" "}
                  </Typography>
                  <Typography variant="h6" className="">
                    <img className="image" src={ticimage} alt="" />
                    Full consultation
                  </Typography>
                  <Typography variant="h6">
                    <img className="image" src={ticimage} alt="" />
                    Implementation
                    <Typography variant="h6">
                      <img className="image" src={ticimage} alt="" />
                      Priority support
                    </Typography>
                  </Typography>
                  <Button
                    className="get_container"
                    text={
                      <Typography className="text_button" variant="h2">
                        Get Started
                      </Typography>
                    }
                  />
                </Typography>
              </Container>
            </div>
            <div className="servicecontainer">
              <Container className="servicepackage_card_container">
                <Typography variant="h7" className="title1_button">
                  <h2>Enterprise</h2>
                </Typography>
                <Typography className="Head_text">
                  <Typography variant="h8" className="price_text">
                    <b>Custom</b>{" "}
                  </Typography>
                  <Typography variant="h6" className="">
                    <img className="image" src={ticimage} alt="" />
                    Custom solutions
                  </Typography>
                  <Typography variant="h6">
                    <img className="image" src={ticimage} alt="" />
                    Dedicated team
                    <Typography variant="h6">
                      <img className="image" src={ticimage} alt="" />
                      24/7 support
                    </Typography>
                  </Typography>
                  <Button
                    className="get_container"
                    text={
                      <Typography className="text_button" variant="h2">
                        Get Start
                      </Typography>
                    }
                  />
                </Typography>
              </Container>
            </div>
          </div>
        </div>
      </div>
    );
}