import { Container } from "../../Components/Continer/Continer";
import { Typography } from "../../Components/Typography/Typography";
import "./About.scss"; // Assuming you have a CSS file for styling
import  rocket from "../../Assets/rocket.svg"; // Import your image
import Frame from "../../Assets/Frame.png"
import Vector from "../../Assets/Vector.png";

export const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <Typography variant="h4"> About GTM Labs</Typography>
      </div>
      <div className="about-content">
        We are a team of experts dedicated to helping businesses achieve their
        go-to- market goals through innovative strategies and cutting-edge
        solutions.
      </div>
      <div className="about-list">
        <div className="about-list-item">
          <Container className="inovation_container">
            <img src={rocket} alt="" />
          </Container>
          <Typography variant="h2" className="Expert_text">Innovation</Typography>{" "}
          <Typography className="innovation_text" variant="h3">
            Cutting-edge solutions tailored to your business needs.
          </Typography>
        </div>{" "}
        <div className="about-list-item">
          <Container className="Experties_text">
            <img src={Frame} alt="" />
          </Container>
          <Typography variant="h2" className="Expert_text">Expertise</Typography>{" "}
          <Typography className="innovation_text" variant="h3">
            Experienced team with proven track record
          </Typography>
        </div>
        <div className="about-list-item">
          <Container className="Experties_text">
            <img src={Vector} alt="" />
          </Container>
          <Typography  variant="h2" className="Expert_text">Innovation</Typography>{" "}
          <Typography className="innovation_text" variant="h3">
            Strategies that drive measurable results.
          </Typography>
        </div>
      </div>
      <div></div>
    </div>
  );
};
