import { Container } from "../../Components/Continer/Continer";
import { Typography } from "../../Components/Typography/Typography";
import { Grid, GridItem } from "../../Components/Grid/Grid";
import "./About.scss";
// import rocket from "../../Assets/rocket.svg";
// import Frame from "../../Assets/Frame.png";
// import Vector from "../../Assets/Vector.png";
// import { text } from "framer-motion/client";

export const About = () => {
  return (
    <div>
      <Typography variant="h1" className="our_text">
        {`OUR ADVANTAGES`.split("").map((char, idx) => (
          <span key={idx} className="char">
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </Typography>
      <div className="text_container">
        <Typography variant="h4" className="text_container">
          Not Just Another Agency,
          <Typography variant="h4" className="second_text">
            A Real Growth Partner.
          </Typography>
          <Typography className="text_container2">
            Here’s how we help Web3 and AI startups grow with purpose.
          </Typography>
        </Typography>
      </div>
    </div>
  );
};
