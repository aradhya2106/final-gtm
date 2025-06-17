import React from "react";
import "./TopBar.css";
import logo from "../Assets/Gtm_labs_logos.svg"; // Adjust the path as necessary
import { Button } from "./Button/Button";


export default function Topbar() {
  return (
    
  

    <header className="topbar">
      <div>
         <img src={logo} style=
      {{height:"154px", width:"134px",top:"-40px",left:"23px"}}/>
      </div>

      <div className="topbar-container">
        {/* <div className="logo">Gtm Labs</div> */}
        <nav >
          <ul className="nav-links">
            <il><a href="#Home">Home</a></il>
            <li><a href="#about">About</a></li>
            <li><a href="#ecosystem">Ecosystem</a></li>
            <li><a href="#ventures">Ventures</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
      <div className="topbar-buttons">
        <Button text={"Get Started"} />
        </div>
    </header>
  );
}
