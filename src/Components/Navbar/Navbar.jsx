import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logoDefault from "../../assets/logo/logoimage-removebg-preview.png";
import logoScrolled from "../../assets/logo/0f1021e9-4dd3-4f4e-888e-498411239af4.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoSrc, setLogoSrc] = useState(logoDefault);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
        setLogoSrc(logoScrolled);
      } else {
        setIsScrolled(false);
        setLogoSrc(logoDefault);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="first-page">
      <header>
        <div id="header" className={isScrolled ? "scrolled" : ""}>
          <nav>
            <div id="navbar">
              <div className="logo">
                <img id="logo-img" src={logoSrc} alt="Carvilla Logo" />
              </div>
              <ul id="menu" className={isMenuActive ? "active" : ""}>
                <li>
                  <a href="#backimage">HOME</a>
                </li>
                <li>
                  <a href="#content-section">SERVICE</a>
                </li>
                <li>
                  <a href="#newcarscontainer">NEW CARS</a>
                </li>
                <li>
                  <a href="#FeaturedCarsContainer">FEATURED CARS</a>
                </li>
                <li>
                  <a href="#brandssection">BRANDS</a>
                </li>
                <li>
                  <a href="#footer1">CONTACT</a>
                </li>
                <li>
                  <Link to="/login">
                    <button className="login-btn">Login</button>
                  </Link>
                </li>
                <li>
                  <button
                    className="signup-btn"
                    onClick={() => navigate("/signup")}
                  >
                    Sign Up
                  </button>
                </li>
              </ul>
              <div
                className="menu-toggle"
                id="mobile-menu"
                onClick={toggleMenu}
              >
                ☰
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
