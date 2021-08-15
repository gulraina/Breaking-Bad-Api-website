import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import {Link} from 'react-router-dom'
function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>BREAKING BAD</h1>
      <p>Take a look at the amazing cast of this phenomenal show!</p>
      <div className='hero-btns'>
      
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={'../pages/Characters'}
        >
          GET STARTED
        </Button>
      
        
      </div>
    </div>
  );
}

export default HeroSection;