import React from "react";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1>Welcome to Gtmlabs</h1>
        <p>
          Building the future with innovative AI, cloud, and software solutions.
        </p>
        <a href="#apply" className="apply-button">
          Apply Now
        </a>
      </div>
    </section>
  );
}
