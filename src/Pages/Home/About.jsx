import { Container } from "../../Components/Continer/Continer";
import { Typography } from "../../Components/Typography/Typography";
import { Grid, GridItem } from "../../Components/Grid/Grid";
import "./About.scss";
import Freampeople from "../../Assets/Freampeople.png"
import  circular from "../../Assets/circular.png"
import  rocket from  "../../Assets/rocket.png"
// import  internet from "../../Assets/Internet.png"
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
      <div>
      <div class="cards-container">
  {/* <!-- Left Column --> */}
  <div class="column">
    <div class="card card-1">
      <img src="Freampeople" alt="" class="card-icon" />
      <h3>Web3 & AI Native Team</h3>
      <p>Built for Web3. We speak the language of DeFi, DAOs, …</p>
    </div>
    <div class="card card-3">
      <img src="rocket" alt="" class="card-icon" />
      <h3>Fundraising & Launchpad Support</h3>
      <p>We support your raise with sharp GTM strategy, decks, …</p>
    </div>
  </div>

  {/* <!-- Right Column --> */}
  <div class="column">
    <div class="card card-2">
      <img src="circular" alt="" class="card-icon" />
      <h3>Outcome‑Driven Approach</h3>
      <p>We build campaigns that drive real business …</p>
    </div>
    <div class="card card-4">
      <img src="internet" alt="" class="card-icon" />
      <h3>Global Network Access</h3>
      <p>We launch globally, activate locally. With on‑ground partners …</p>
    </div>
  </div>
</div>

      </div>
    </div>
  );
};
