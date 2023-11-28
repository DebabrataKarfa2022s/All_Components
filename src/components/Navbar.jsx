import React, { useState } from "react";
import "./style.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  // const [isNavFixed, setIsNavFixed] = useState(false);

  // const handleScroll = () => {
  //   const scrollY = window.scrollY;
  //   const scrollThreshold = 100; // Adjust this threshold as needed

  //   // Set isNavFixed to true when the user scrolls past the threshold
  //   setIsNavFixed(scrollY > scrollThreshold);
  // };

  // useEffect(() => {
  //   // Attach the scroll event listener when the component mounts
  //   window.addEventListener('scroll', handleScroll);

  //   // Detach the scroll event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []); // Empty dependency array ensures the effect runs once on mount


  return (
    <>
      <nav className="main-nav ">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>D</span>EBABRATA
            <span>K</span>ARFA
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">about</a>
            </li>
            <li>
              <a href="/service">services</a>
            </li>
            <li>
              <a href="/contact">contact</a>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.fb.com"
                target="_thapa">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_thapa">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com"
                target="_thapa">
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      {/* hero section  */}
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Technical</h1>
      </section>
    </>
  );
};

export default Navbar;
