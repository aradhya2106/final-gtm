import logo from './logo.svg';
import './App.css';
import HeroSection from'./Components/HeroSection.jsx';
import React from 'react';
import Topbar from './Components/TopBar.js';
import AnimatedText from './Components/AnimationText.jsx';
import './Components/SecondAnimation.jsx';
import SecondAnimation from './Components/SecondAnimation.jsx';
import { Button } from './Components/Button/Button.jsx';
import { Typography } from './Components/Typography/Typography.jsx';
import { Home } from './Pages/Home/Home.jsx';
import { Container } from './Components/Continer/Continer.jsx';

function App() {
  return(
    <div>
       
          {/* <AnimatedText/>
          <HeroSection/>
          <SecondAnimation/> */}
          {/* <div style={{background: 'black', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Button text={<div style={{fontSize:"6rem"}}>login</div>}/>
      </div> */}
   
    {/* <Typography variant='h1'>Hello Bhargava</Typography> */}
    <Home/>
    
    </div>  
  )
}

export default App;
