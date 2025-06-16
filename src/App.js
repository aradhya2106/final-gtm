import logo from './logo.svg';
import './App.css';
import HeroSection from'./Components/HeroSection.jsx';
import React from 'react';
import Topbar from './Components/TopBar.js';
import AnimatedText from './Components/AnimationText.jsx';
function App() {
  return(
    <div>
          <AnimatedText/>
          <HeroSection/>
    <Topbar/>
    </div>  
  )
}

export default App;
