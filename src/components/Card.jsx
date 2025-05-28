import React from 'react';
import '../css/Card.css';

const Card = ({ children }) => {
  return (
    <div className="card-container">
      <div className="card-content">
        {children}
      </div>
    </div>
  );
};

export default Card;