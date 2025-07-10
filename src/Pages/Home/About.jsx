import { Container } from "../../Components/Continer/Continer";
import { Typography } from "../../Components/Typography/Typography";
import { Grid, GridItem } from "../../Components/Grid/Grid";
import "./About.scss";
import Freampeople from "../../Assets/Freampeople.png"
import  circular from "../../Assets/circular.png"
import  rocket from  "../../Assets/rocket.png"
import  internet from "../../Assets/Internet.png"
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
              <img src={Freampeople} alt="" class="card-icon" />
              <h3>
                <Typography className="outcome_text" variant="h14">
                  Web3 & AI Native Team
                </Typography>
              </h3>
              <p>
                <Typography variant="h13">
                  Built for Web3. We speak the language of DeFi, DAOs, and AI
                  creating strategies made for crypto-native audiences, not Web2
                  templates.
                </Typography>
              </p>
            </div>
            <div class="card card-3">
              <img src={rocket} alt="" class="card-icon" />
              <h3>
                <Typography className="outcome_text" variant="h14">
                  Fundraising & Launchpad Support
                </Typography>
              </h3>
              <p>
                <Typography variant="h13">
                  We support your raise with sharp GTM strategy, decks, and warm
                  intros then help you launch seamlessly across Tier 1–3
                  platforms with full listing, liquidity, and compliance
                  support.
                </Typography>
              </p>
            </div>
          </div>

          {/* <!-- Right Column --> */}
          <div class="column">
            <div class="card card-2">
              <img src={circular} alt="" class="card-icon" />
              <h3>
                <Typography className="outcome_text" variant="h14">
                  Outcome-Driven Approach
                </Typography>
              </h3>
              <p>
                <Typography variant="h13">
                  We build campaigns that drive real business results from user
                  growth to fundraising with ROI at the core of everything we
                  do.
                </Typography>
              </p>
            </div>
            <div class="card card-4">
              <img src={internet} alt="" class="card-icon" />
              <h3>
                <Typography className="outcome_text" variant="h14">
                  Global Network Access
                </Typography>
              </h3>
              <p>
                <Typography variant="h13">
                  We launch globally, activate locally. With on-ground partners
                  and cultural fluency, we scale campaigns that truly resonate.
                </Typography>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
