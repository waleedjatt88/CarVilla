import React from 'react';
import './Header.css';
import bgimage from '../../assets/welcome/carvilla88bg.png'

const Header = () => {
  return (
    <>
     <div id="first-page">
      <div className="header">
      <img id="backimage" src={bgimage} alt="Background" />
      <div id="info">
        <h1>get your desired car in resonable price</h1>
        <br />
        <br />
        <h2>Find your dream car at the best price shop now...!</h2>
        <button className="btn101">Contact Us</button>
      </div>
      </div>
      </div>
    </>
  );
};

export default Header;