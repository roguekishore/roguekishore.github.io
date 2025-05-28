import React from 'react';
import '../css/Hero.css';
import Navbar from './NavBar';
import Badge from './Badge';

function Hero() {
  return (
    <div className='portfolio-wrapper'>
      <Navbar></Navbar>
      <div className="portfolio-container">
          <Badge><span className='badge-star'>✦</span>Open to work</Badge>
        <div className="hero-section">
          <div className="hero-content">
            <span>Hi I'm Kishore,</span>
            <br></br><span>Software Developer<span className='dot'>.</span></span>
            <br></br><span className='india'>from India.</span>
          </div>

        </div>
        <div className='hero-para'>"The best time to plant a tree was 20 years ago. <br className='break'></br>The second best time is now."</div>
      </div>
    </div>


  );
}

export default Hero;