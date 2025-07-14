import React from "react";
import "./Ourteam.scss";
import { Typography } from "../../Components/Typography/Typography";
import { Container } from  "../../Components/Continer/Continer";
import { Button } from "../../Components/Button/Button";

export const Ourteam = () => {
  return (
    <div className="container_smartsolution">
      <div className="smartsolution_container">
        <Typography variant="h9" className="Structure_text">
          Smart Solutions, Trusted Team
        </Typography>
        <Typography variant="h9" className="smartsolution_subtitle_text ">
          Built to Grow Your Business
        </Typography>
        <Typography variant="h20" className="smartsolution_description_text">
          Unlike generic AI tools, our solutions are custom-built to fit your
          workflows seamlessly integrating <br /> with your current systems
          without disrupting operations. Whether it’s automation, smarter
          customer <br />
          engagement, or enterprise-grade security, we deliver real results
          minus the complexity.
        </Typography>
      </div>
      <div>
        <div className="smartsolutionall_container">
          <Container className="year_container">
            <Typography variant="h11" className="year_text">
              25 Year
            </Typography>
            <Typography variant="h12">of pioneering digital growth</Typography>
            <Typography variant="h12">&nbsp;</Typography>
          </Container>
          <div>
            <Container className="year_container">
              <Typography variant="h11" className="year_text">
                2,000+
              </Typography>
              <Typography variant="h12">
                Satisfied Clients Across
                <Typography className="industries_text">Industries</Typography>
              </Typography>
            </Container>
          </div>
          <div>
            <div>
              <Container className="year_container">
                <Typography variant="h11" className="year_text">
                  21
                </Typography>
                <Typography variant="h12">
                  Countries Where Our
                  <Typography variant="h12" className="industries_text">
                    Solutions Impact Lives
                  </Typography>
                </Typography>
              </Container>
            </div>
          </div>
          <div>
            <div>
              <Container className="year_container">
                <Typography variant="h11" className="year_text">
                  4
                </Typography>
                <Typography variant="h12">
                  Continents Reached with Our
                  <Typography variant="h12" className="industries_text">
                    z Digital Innovations
                  </Typography>
                </Typography>
              </Container>
            </div>
          </div>
        </div>
        <div className="talk_button">
          <Button
            className="talktoexpert_button"
            text={
              <Typography variant="h2" className="talktoexpert_text">
                Talk to Expert
              </Typography>
            }
          ></Button>
        </div>
      </div>
    </div>
  );
};
