import React from "react";
import { ServiceCard } from "../../Components/ServiceCard/ServiceCard";
import { Typography } from "../../Components/Typography/Typography";
import "./Service.scss";

import developmentIcon from "../../Assets/Development.png";
import eventIcon from "../../Assets/EventServices.png";
import growthIcon from "../../Assets/Growth.png";
import marketingIcon from "../../Assets/marketing.png";

export const Service = () => (
  <div className="service_section" id="services">
    <Typography variant="h17" className="service_title">
      {"SERVICES".split("").map((char, idx) => (
        <span key={idx} className="char">
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </Typography>

    <div className="service_intro">
      <Typography variant="h5" className="Built_text">
        Your All‑In‑One{" "}
        <Typography variant="h5" className="Structure_text">
          Web3 Growth Engine
        </Typography>
      </Typography>

      <Typography variant="h5" className="service_description">
        End‑To‑End Strategies And Execution To Help Web3, AI, And
        <br />
        Tech Startups Grow With Clarity And Confidence.
      </Typography>
    </div>

    <div className="service_card_wrapper">
      <ServiceCard
        title="MARKETING"
        subtitle="Dominate the Platforms That Matter."
        description="We turn attention into traction with high-impact content, social strategy, and KOL-powered campaigns that cut through the noise and put your brand front and center across X, Discord, Telegram, and beyond."
        src={marketingIcon}
        items={[
          "SOCIAL MEDIA MANAGEMENT",
          "HIGH-IMPACT CONTENT",
          "INFLUENCER & KOL CAMPAIGNS",
          "PRESS RELEASES & AMA CAMPAIGNS",
          "GLOBAL DIGITAL & PHYSICAL CAMPAIGNS",
        ]}
      />
      <ServiceCard
        title="GROWTH"
        subtitle="Traction-first strategies for high-velocity teams."
        description="We go beyond strategy. Our team designs and drives custom growth roadmaps aligned to your startup's stage, delivering measurable outcomes that move the needle fast."
        src={growthIcon}
        items={[
          "STRATEGY DESIGN & ROADMAP EXECUTION",
          "BUSINESS GROWTH CONSULTING",
          "FUNDRAISING SUPPORT",
          "PRODUCT LAUNCH CAMPAIGNS",
          "REFERRAL-BASED COMMUNITY GROWTH",
        ]}
      />
      <ServiceCard
        title="DEVELOPMENT"
        subtitle="Build What Matters. Faster. Smarter."
        description="From high-performance websites and dApps to AI agents and trading bots we bring your tech to life with end-to-end development tailored for emerging tech founders."
        src={developmentIcon}
        items={[
          "WEB & APP DEVELOPMENT",
          "SMART CONTRACT DEVELOPMENT & AUDITS",
          "TELEGRAM MINI-APP & BOT DEVELOPMENT",
          "AI AGENTS & TRADING BOTS",
          "FRONTEND UI/UX IMPLEMENTATION",
        ]}
      />
      <ServiceCard
        title="EVENT SERVICES"
        subtitle="Create Experiences That Build Community"
        description="Host unforgettable events, both digital and physical. Whether it's a major Web3 summit or niche founder AMA, we handle everything from ideation to post-event amplification."
        src={eventIcon}
        items={[
          "END-TO-END IRL & VIRTUAL EVENT EXEC.",
          "COMMUNITY-DRIVEN EVENTS & ACTIVATIONS",
          "INFLUENCER CAMPAIGNS + PARTNERSHIPS",
          "POST-EVENT MEDIA, REPORTS.",
          "CONFERENCES, LAUNCH EVENTS, PANELS",
        ]}
      />
    </div>
  </div>
);