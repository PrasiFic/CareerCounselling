import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>Confused!</h1>
      <p>Want to choose the right path, Did't know where to start off</p>
      <p>Book Your slot now. </p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          CONSULT NOW
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='30px'
          onClick={console.log('hey')}
        >

        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
