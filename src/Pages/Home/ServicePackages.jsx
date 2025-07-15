import React from "react";
import { Button } from "../../Components/Button/Button";
import { Typography } from "../../Components/Typography/Typography";
import "./ServicePackages.scss";

export const ServicePackages = () => {
  const handleScheduleCall = () => {
    window.open("https://calendly.com/gtmlabsxyz/consult", "_blank");
  };

  const handleTalkToExpert = () => {
    window.open("https://calendly.com/gtmlabsxyz/consult", "_blank");
  };

  return (
    <div className="servicepackage_section">
      {/* Title Section */}
      <div className="servicepackage_header">
        <Typography variant="h17" className="servicepackage_title">
          {"SERVICE".split("").map((char, idx) => (
            <span key={idx} className="char">
              {char}
            </span>
          ))}
          <span className="mobile_break"></span>
          {"PACKAGES".split("").map((char, idx) => (
            <span key={idx + 7} className="char">
              {char}
            </span>
          ))}
        </Typography>

        <div className="servicepackage_subtitle">
          <Typography variant="h5" className="choose_text">
            Choose a Plan That Fits
          </Typography>
          <Typography variant="h5" className="your_growth_text">
            Your <span className="gradient_text">Growth Stage</span>
          </Typography>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="pricing_cards_container">
        {/* Starter Card */}
        <div className="pricing_card">
          <div className="card_header">
            <Typography variant="h6" className="plan_name">
              STARTER
            </Typography>
            <Typography variant="h3" className="price">
              $999
            </Typography>
          </div>
          <div className="features_list">
            <div className="feature_item">
              <div className="check_icon"></div>
              <Typography variant="body" className="feature_text">
                Basic consultation
              </Typography>
            </div>
            <div className="feature_item">
              <div className="check_icon"></div>
              <Typography variant="body" className="feature_text">
                Strategy planning
              </Typography>
            </div>
            <div className="feature_item">
              <div className="check_icon"></div>
              <Typography variant="body" className="feature_text">
                Email support
              </Typography>
            </div>
          </div>
          <Button className="schedule_button" onClick={handleScheduleCall}>
            <span className="button_text">Schedule a call</span>
          </Button>
        </div>

        {/* Professional Card */}
        <div className="pricing_card popular_card">
          <div className="popular_badge">
            <Typography variant="caption" className="popular_text">
              Popular
            </Typography>
          </div>
          <div className="card_header">
            <Typography variant="h6" className="plan_name">
              PROFESSIONAL
            </Typography>
            <Typography variant="h3" className="price">
              $2999
            </Typography>
          </div>
          <div className="features_list">
            <div className="feature_item">
              <div className="check_icon"></div>
              <Typography variant="body" className="feature_text">
                Full consultation
              </Typography>
            </div>
            <div className="feature_item">
              <div className="check_icon"></div>
              <Typography variant="body" className="feature_text">
                Implementation
              </Typography>
            </div>
            <div className="feature_item">
              <div className="check_icon"></div>
              <Typography variant="body" className="feature_text">
                Priority support
              </Typography>
            </div>
          </div>
          <Button className="schedule_button" onClick={handleScheduleCall}>
            <span className="button_text">Schedule a call</span>
          </Button>
        </div>

        {/* Enterprise Card */}
        <div className="pricing_card">
          <div className="card_header">
            <Typography variant="h6" className="plan_name">
              ENTERPRISE
            </Typography>
            <Typography variant="h3" className="price">
              Custom
            </Typography>
          </div>
          <div className="features_list">
            <div className="feature_item">
              <div className="check_icon"></div>
              <Typography variant="body" className="feature_text">
                Custom solutions
              </Typography>
            </div>
            <div className="feature_item">
              <div className="check_icon"></div>
              <Typography variant="body" className="feature_text">
                Dedicated team
              </Typography>
            </div>
            <div className="feature_item">
              <div className="check_icon"></div>
              <Typography variant="body" className="feature_text">
                24/7 support
              </Typography>
            </div>
          </div>
          <Button className="schedule_button" onClick={handleScheduleCall}>
            <span className="button_text">Schedule a call</span>
          </Button>
        </div>
      </div>

      {/* Smart Solutions Section */}
      <div className="smart_solutions_section">
        <div className="solutions_header">
          <Typography variant="h4" className="solutions_title">
            <span className="gradient_text">Smart Solutions, Trusted Team</span>
          </Typography>
          <Typography variant="h4" className="solutions_subtitle">
            Built to Grow Your Business
          </Typography>
        </div>

        <Typography variant="body" className="solutions_description">
          Unlike generic AI tools, our solutions are custom-built to fit your
          workflows seamlessly integrating with your current systems without
          disrupting operations. Whether it's automation, smarter customer
          engagement, or enterprise-grade security, we deliver real results
          minus the complexity.
        </Typography>

        {/* Stats Section */}
        <div className="stats_container">
          <div className="stat_card">
            <Typography variant="h3" className="stat_number">
              25 Years
            </Typography>
            <Typography variant="caption" className="stat_description">
              of pioneering digital growth
            </Typography>
          </div>
          <div className="stat_card">
            <Typography variant="h3" className="stat_number">
              2,000+
            </Typography>
            <Typography variant="caption" className="stat_description">
              Satisfied Clients Across Industries
            </Typography>
          </div>
          <div className="stat_card">
            <Typography variant="h3" className="stat_number">
              21
            </Typography>
            <Typography variant="caption" className="stat_description">
              Countries Where Our Solutions Impact Lives
            </Typography>
          </div>
          <div className="stat_card">
            <Typography variant="h3" className="stat_number">
              4
            </Typography>
            <Typography variant="caption" className="stat_description">
              Continents Reached with Our Digital Innovations
            </Typography>
          </div>
        </div>

        {/* CTA Button */}
        <div className="cta_section">
          <Button className="talk_expert_button" onClick={handleTalkToExpert}>
            <span className="expert_button_text">Talk to Expert</span>
          </Button>
        </div>
      </div>
    </div>
  );
};