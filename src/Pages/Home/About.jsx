import { Typography } from "../../Components/Typography/Typography";
import "./About.scss"; // Assuming you have a CSS file for styling

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
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
  );
};
