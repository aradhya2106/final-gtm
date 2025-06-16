import React, { useState, useEffect } from "react";
import "./AnimationText.css";

const phrases = [
  "Welcome to Gtmlabs",
  "Building the future with innovative AI, cloud, and software solutions.",
];

export default function AnimatedText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 4000);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="animated-container">
 
      <div className="text-section">
        <h1 className="fade-text">{phrases[index]}</h1>
      </div>

            <div className="animation-section">
        <div className="blob">
          <div className="blob-text">AI. Cloud. Solutions.</div>
        </div>
      </div>
    </div>
  );
}
