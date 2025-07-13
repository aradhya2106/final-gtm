import React from "react";
import "./Service.scss";
import { Typography } from "../../Components/Typography/Typography";
import { ServiceCard } from "../../Components/ServiceCard/ServiceCard";

import marketingIcon from "../../Assets/marketing.png";
import growthIcon from "../../Assets/Growth.png";
import developmentIcon from "../../Assets/Development.png";
import eventIcon from "../../Assets/EventServices.png";
import Rectangular from "../../Assets/Rectangular.png"

export const Service = () => (
  <div className="service_section">
    <Typography variant="h17" className="service_title">
      {"SERVICES".split("").map((char, idx) => (
        <span key={idx} className="char">
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </Typography>

    <div className="service_intro">
      <Typography variant="h5" className="Built_text">
        Your All‑In‑One
        <Typography variant="h5" className="Structure_text">
          Web3 Growth Engine
        </Typography>
      </Typography>

      <Typography variant="h5" className="service_description">
        End‑to‑end strategies & execution to help Web3, AI, and
        <br />
        tech startups grow with clarity and confidence.
      </Typography>
    </div>

    <div className="service_card_wrapper">
      <ServiceCard
        Rectangular={Rectangular}
        title="MARKETING"
        subtitle=".Dominate the Platforms That Matter."
        description="We turn attention into traction with high-impact content, social strategy, and KOL-powered 
        campaigns that cut through the noise and put your brand front and center across X, Discord, Telegram, 
        and beyond."
        src={marketingIcon}
        items={[
          "Social media management",
          "High‑impact content",
          "Influencer & KOL campaigns",
          "Press releases & AMA campaigns",
          "Global digital & physical campaigns",
        ]}
      />
      <ServiceCard
        Rectangular={Rectangular}
        title="GROWTH"
        subtitle="Traction-first strategies for high-velocity teams."
        description="We go beyond strategy. Our team designs 
        and drives custom growth roadmaps aligned to your startup’s stage,
         delivering measurable outcomes that move the needle fast."
        src={growthIcon}
        items={[
          "strategy design & roadmap execution",
          "Business growth consulting",
          "Fundraising support",
          "Product launch campaigns",
          "referral-based community growth",
        ]}
      />
      <ServiceCard
        Rectangular={Rectangular}
        title="DEVELOPMENT"
        subtitle="Build What Matters. Faster. Smarter."
        description="From high-performance websites and dApps to AI agents and trading bots we 
        bring your tech to life with 
        end-to-end development tailored for emerging tech founders."
        src={developmentIcon}
        items={[
          "Web & app development",
          "Smart contract development & audits",
          "Telegram mini-app & bot development",
          "AI agents & trading bots",
          "Frontend UI/UX implementation",
        ]}
      />
      <ServiceCard
        Rectangular={Rectangular}
        title="EVENT SERVICES"
        subtitle="Create Experiences That Build Community"
        description="Host unforgettable events, both digital and physical. Whether it’s 
        a major Web3 summit or niche founder AMA, 
        we handle everything from ideation to post-event amplification."
        src={eventIcon}
        items={[
          "End-to-end IRL & virtual event exec.",
          "Community-driven events & activations",
          "Influencer campaigns + partnerships",
          "Post-event media, reports.",
          "Conferences, launch events, panels",
        ]}
      />
    </div>
  </div>
);
