import React from "react";
import "./Header.css";
import bgimage from "../../assets/bg/259098f7-f51c-4971-8a55-b6e71fb10549.jpg.jpg";

const Header = () => {
  return (
    <>
      <div id="first-page31">
        <div className="header32">
          <img id="backimage33" src={bgimage} alt="Background" />
          <div id="info34"  >
            <h1  className="animate-fade-in 1">
              <b>Get Your Desired Car In Resonable Price</b>
            </h1>
            <br />
            <h2 className="animate-fade-in 2">
              <b>Find Your Dream Car At The Best Price Shop Now...!</b>
            </h2>
            <button id="btn35" className="animate-fade-in 3">Contact Us</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
