import React, { useState, useEffect } from 'react';
import './DemoNavbarStyle.css';
const DemoNavbar = () => {
  const [isNavFixed, setIsNavFixed] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const scrollThreshold = 100; // Adjust this threshold as needed

    // Set isNavFixed to true when the user scrolls past the threshold
    setIsNavFixed(scrollY > scrollThreshold);
  };

  useEffect(() => {
    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Detach the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs once on mount

  return (
    <div className={`navbar ${isNavFixed ? 'fixed' : ''}`}>
      {/* Navbar content */}
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default DemoNavbar;
