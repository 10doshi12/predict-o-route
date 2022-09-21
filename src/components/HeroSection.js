import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';


function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/loopvidwebs.mp4' autoPlay loop muted />
      <h1>Predict-O-Route</h1>
      <p>Don't wait, move faster!</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Link to='/sign-up'>
          <Button>DashBoard</Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
