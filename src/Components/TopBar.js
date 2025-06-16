import React from "react";
import "./TopBar.css";

export default function Topbar() {
  return (
    <header className="topbar">
      <div className="topbar-container">
        <div className="logo">Gtm Labs</div>
        <nav>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#ecosystem">Ecosystem</a></li>
            <li><a href="#ventures">Ventures</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
