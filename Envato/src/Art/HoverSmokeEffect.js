import React, { useState } from 'react';
import "../App.css";
import Home from './Home';

const HoverSmokeEffect = () => {
  const [smokeElements, setSmokeElements] = useState([]);

  const handleMouseEnter = (event) => {
    const newSmoke = {
      left: event.clientX,
      top: event.clientY,
     
    };
    setSmokeElements((prev) => [...prev, newSmoke]);
  };

  return (
    <div 
    
      className="hover-area" 
      onMouseMove={handleMouseEnter} 
      style={{ position: 'relative', width: '100%', height: '100vh', background: '#000' }}>
      {smokeElements.map(smoke => (
        <div
          key={smoke.id}
          className="smoke"
          style={{ left: smoke.left, top: smoke.top }}
        >
            
        </div>
    
      ))}
      <Home/>
    </div>
  );
};

export default HoverSmokeEffect;