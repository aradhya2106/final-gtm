import React from 'react';
import { Button } from "../../src/Components/Button/Button";
import gtmlogonew from "../Assets/gtmlogonew.png";
import Xnew from "../Assets/Xnew.png";
import "./TopBar.css";
import Ellipse from "../Assets/Ellipse.png";
import { Typography } from "../../src/Components/Typography/Typography";
import Linkedin from "../Assets/Linkedinnew.png";
const TopBar = () => {
  return (
    <div className="page_wrapper">
    <div className='header'>
    <div className='topbar'>
    <div className='topbar_container'>
      <div className='topbar_content'>
        <div className='logo'>
          <img src={gtmlogonew} alt='Gtmlablogo' />
        </div>

        <div className='nav_links'>
          <div className='About_container'><Typography variant='h3'>ABOUT</Typography></div>
          <div className='Service_container'><Typography variant='h3'>SERVICES</Typography></div>
          <div className='Packages_container'><Typography variant='h3'>SERVICES</Typography></div>
          <div className='Blog_container'><Typography variant='h3'>BLOGS</Typography></div>
          <div className='Contact_container'><Typography variant='h3'>CONTACT</Typography></div>
        </div>

        <div className='social_section'>
          <img className='social_icon' src={Xnew} alt='X' />
          <img  className='linkedin' src={Linkedin} alt='Linkedin'/>
          <div className='button'>
            <Button className='button_container' text={<Typography className='button_text' variant="h2">Get Start</Typography>}/>
          </div>

        </div>
      </div>
    </div>
    </div>
    <div className='topbar_bottom'>
     <div className='Strategy_text'> <Typography variant='h4'>Strategy</Typography> </div>
     <img src={Ellipse} alt='Ellipse' className='ellipse2' />
     <div className='Execution_text'> <Typography variant='h4'>Execution</Typography></div>
     <img src={Ellipse} alt='Ellipse' className='ellipse2' />
     <div className='Result_text'> <Typography variant='h4'>Results</Typography>  </div>
    </div>
    </div>
    </div>
  );
};

export default TopBar;
