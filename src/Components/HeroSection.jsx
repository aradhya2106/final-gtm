import React from "react";
import "./HeroSection.css";
export default function HeroSection() {
  return (
    <section
      id="home"
      className="h-screen bg-gradient-to-r from-purple-800 via-black to-purple-900 text-white flex flex-col justify-center items-center text-center px-4"
    >
      <h1 className="text-5xl md:text-6xl font-bold">Welcome to Gtmlabs</h1>
      <p className="mt-6 text-xl max-w-xl">
        Building the future with innovative AI, cloud, and software solutions.
      </p>
      <button className="mt-8 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-full text-lg">
        Get Started
      </button>
    </section>
  );
}
  