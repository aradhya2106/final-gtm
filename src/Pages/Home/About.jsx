import Freampeople from "../../Assets/Freampeople.png";
import internet from "../../Assets/Internet.png";
import circular from "../../Assets/circular.png";
import rocket from "../../Assets/rocket.png";
import { Button } from "../../Components/Button/Button";
import { Typography } from "../../Components/Typography/Typography";
import "./About.scss";

export const About = () => {
  const handleTurnStrategyIntoAction = () => {
    window.open("https://calendly.com/gtmlabsxyz/consult", "_blank");
  };

  const renderTitle = () => {
    return (
      <div className="advantages_title_wrapper">
        <div className="advantages_title_line">
          {"OUR".split("").map((char, idx) => (
            <span key={idx} className="char">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>
        <div className="advantages_title_line">
          {"ADVANTAGES".split("").map((char, idx) => (
            <span key={idx} className="char">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="about_section">
      {/* Header Section */}
      <div className="about_header">
        <Typography variant="h3" className="advantages_title">
          {renderTitle()}
        </Typography>

        <div className="main_title">
          <Typography variant="h4" className="title_main">
            Not Just Another Agency,
          </Typography>
          <Typography variant="h4" className="title_gradient">
            A Real Growth Partner.
          </Typography>
        </div>

        <Typography variant="h14" className="subtitle">
          Here's How We Help Web3 And AI Startups Grow With Purpose.
        </Typography>
      </div>

      {/* Cards Grid */}
      <div className="advantages_grid">
        <div className="advantage_card">
          <div className="card_content">
            <div className="card_icon">
              <img src={Freampeople} alt="Web3 & AI Native Team" />
            </div>
            <Typography variant="h15" className="card_title">
              Web3 & AI Native Team
            </Typography>
            <Typography variant="caption" className="card_description">
              Built for Web3. We speak the language of DeFi, DAOs, and AI creating
              strategies made for crypto-native audiences, not Web2 templates.
            </Typography>
          </div>
        </div>

        <div className="advantage_card">
          <div className="card_content">
            <div className="card_icon">
              <img src={circular} alt="Outcome-Driven Approach" />
            </div>
            <Typography variant="h15" className="card_title">
              Outcome-Driven Approach
            </Typography>
            <Typography variant="caption" className="card_description">
              We build campaigns that drive real business results from user growth
              to fundraising with ROI at the core of everything we do.
            </Typography>
          </div>
        </div>

        <div className="advantage_card">
          <div className="card_content">
            <div className="card_icon">
              <img src={rocket} alt="Fundraising & Launchpad Support" />
            </div>
            <Typography variant="h15" className="card_title">
              Fundraising & Launchpad Support
            </Typography>
            <Typography variant="caption" className="card_description">
              We support your raise with sharp GTM strategy, decks, and warm
              intros then help you launch seamlessly across Tier 1–3 platforms
              with full listing, liquidity, and compliance support.
            </Typography>
          </div>
        </div>

        <div className="advantage_card">
          <div className="card_content">
            <div className="card_icon">
              <img src={internet} alt="Global Network Access" />
            </div>
            <Typography variant="h15" className="card_title">
              Global Network Access
            </Typography>
            <Typography variant="caption" className="card_description">
              We launch globally, activate locally. With on-ground partners and
              cultural fluency, we scale campaigns that truly resonate.
            </Typography>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="about_cta">
        <Button
          className="strategy_button"
          onClick={handleTurnStrategyIntoAction}
          text={
            <Typography variant="h2" className="cta_text">
              Turn Strategy Into Action
            </Typography>
          }
        />
      </div>
    </div>
  );
};