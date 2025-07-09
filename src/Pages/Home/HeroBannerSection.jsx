import React from "react";
import "./HeroBanner.scss";
import { Typography } from "../../Components/Typography/Typography";
import { Button } from "../../Components/Button/Button";
import hrobaner from "../../Assets/office.png";
import { Grid, GridItem } from "../../Components/Grid/Grid"; // ✅ Import your Grid system

export const HeroBanner = () => {
  return (
    <div className="hero_banner">
      <div className="hero_banner_container">
        <Typography variant="h1" className="web_text">
           Web3. AI. <div className="Grow_text">Growth. Delivered.</div>
        </Typography>
        <div>
          <Typography variant="h2" className="hero_banner_text">
            We help future forward Start-ups build Traction, Community, and
            Revenue
            <br />
            with Full-Stack growth, Marketing, and Development services.
          </Typography>
        </div>
        <div className="hero_banner_button">
          <div>
            <Button
              className={"start_button"}
              text={
                <Typography variant="h2" className="Start_text">
                  Start Scaling
                </Typography>
              }
            />
          </div>
          <div>
            <Button
              className={"work_button"}
              text={
                <Typography variant="h2" className="MuiTypography-root">
                  How It Works
                </Typography>
              }
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
};
