import React from 'react';
import '../css/Badge.css';

const Badge = ({ children }) => {
  return (
    <div className="badge-container">
      <div className="badge-content">
        {children}
      </div>
    </div>
  );
};

export default Badge;