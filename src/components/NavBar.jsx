import React, { useState, useEffect } from 'react';
import { ReactComponent as Logo } from './logo.svg';
import '../css/NavBar.css';
import { FaClock, FaLocationDot } from 'react-icons/fa6';
import { FaGlobeAsia } from 'react-icons/fa';
import Badge from './Badge';

const Navbar = () => {
  const [indianTime, setIndianTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hourCycle: 'h23',
      };
      const formattedTime = now.toLocaleString('en-US', options);

      setIndianTime(formattedTime);
    };

    updateTime();

    const intervalId = setInterval(updateTime, 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/"><Logo className='logo-svg'></Logo></a>
        </div>
        <div className='navbar-extras'>
          
          <div className='navbar-location'>
            <FaLocationDot />
            <span>
              India
              <span className="utc-mobile">(+5:30)</span>
            </span>
          </div>

        <div className='utc'>
          <div className='navbar-utc'>
            <FaGlobeAsia />
            <span className="utc-desktop">+5:30</span>
          </div>
        </div>

          <div className='navbar-time'>
            <FaClock /><span>{indianTime}</span>
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
