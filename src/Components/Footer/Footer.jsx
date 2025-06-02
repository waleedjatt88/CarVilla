import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#2c2e4a",
        color: "white",
        padding: "40px 0 0 0",
        fontFamily: "sans-serif",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          padding: "0 20px",
        }}
      >
        <div style={{ flex: 1, minWidth: "200px", marginBottom: "20px" }}>
          <h1 style={{ color: "white", cursor: "pointer" }}>CARVILLA</h1>
          <p>
            Your trusted destination for quality new and used cars, with a focus
            on reliability, value, and customer satisfaction.
          </p>
          <br />
          <div id="contact-info">
            <p>
              <a href="">
                <b>Carvilla@gmail.com</b>
              </a>
            </p>
            <p>
              <a href="">
                <b>+92-332-1752616</b>
              </a>
            </p>
          </div>
        </div>
        <div
          className="About-footer"
          style={{ flex: 1, minWidth: "150px", marginBottom: "20px" }}
        >
          <h3 style={{ cursor: "pointer" }}>ABOUT DEVLOON</h3>
          <ul>
            <li>
              <a href="">
                <Link to="/aboutus">About Us</Link>
              </a>
            </li>
            <li>
              <a href="">Career</a>
            </li>
            <li>
              <a href="">Terms of service</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div
          id="Top-Brands"
          style={{ flex: 1, minWidth: "150px", marginBottom: "20px" }}
        >
          <h3 style={{ cursor: "pointer" }}>TOP BRANDS</h3>
          <ul>
            <li>
              <a href="">BMW</a>
            </li>
            <li>
              <a href="">Ferrari</a>
            </li>
            <li>
              <a href="">Lamborghini</a>
            </li>
            <li>
              <a href="">Porsche</a>
            </li>
            <li>
              <a href="">Camaro</a>
            </li>
            <li>
              <a href="">Land Rover</a>
            </li>
            <li>
              <a href="">Audi</a>
            </li>
            <li>
              <a href="">Aston Martin</a>
            </li>
            <li>
              <a href="">Infiniti</a>
            </li>
            <li>
              <a href="">Mercedes</a>
            </li>
            <li>
              <a href="">Nissan</a>
            </li>
          </ul>
        </div>
        <div id="News-Letter">
          <h3 style={{ cursor: "pointer" }}>NEWS LETTER</h3>
          <p>Subscribe to get latest news update and informations</p>
          <input type="email" placeholder="Add Email" />
          <button>Subscribe</button>
        </div>
      </div>
      <div
        id="footer1"
        style={{
          display: "flex",
          gap: "5px",
          justifyContent: "flex-end",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1px",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <img
            src="https://img.icons8.com/color/48/facebook.png"
            alt="Facebook"
            width="24"
          />
          Facebook
        </a>
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1px",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <img
            src="https://img.icons8.com/ios-filled/50/000000/twitterx--v2.png"
            alt="Twitter"
            width="24"
          />
          Twitter
        </a>
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1px",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <img
            src="https://img.icons8.com/fluency/48/instagram-new.png"
            alt="Instagram"
            width="24"
          />
          Instagram
        </a>
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1px",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <img
            src="https://img.icons8.com/fluency/48/linkedin.png"
            alt="LinkedIn"
            width="24"
          />
          LinkedIn
        </a>
      </div>
      <div
        style={{
          marginTop: "30px",
          borderTop: "1px solid #444",
          padding: "20px 20px 0 20px",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <div>
          <p style={{ margin: 0 }}>© 2023 CarVilla. All rights reserved.</p>
          <p style={{ margin: 0 }}>
            Get your desired car at a reasonable price
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
