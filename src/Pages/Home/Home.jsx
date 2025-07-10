import Topbar from "../../Components/TopBar";
import { About } from "./About";
import { HeroBanner } from "./HeroBannerSection";
import React from "react";
import {AboutUs} from "./AboutUs";
import {Service} from "./Service"
import { ServicePackages } from "./ServicePackages";
import { Ourteam} from "./Ourteam";
import {Clientsays} from "./Clientsays"
import "./home.scss"; 
import {Getintouch} from  "./Getintouch"
// import { Ourpartners } from "./Ourpartners";  
export const Home = () => {
    return (
      <div className="home-container">
        <Topbar />
        <HeroBanner />
        <About />
        <AboutUs />
        <Service />
        <ServicePackages />
        <Ourteam />
        <Clientsays/>
        <Getintouch/>
      </div>
    );
}