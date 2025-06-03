import React, { useState } from "react";

import logoDefault from "../../assets/logo/logoimage-removebg-preview.png";
import { Link, useNavigate } from "react-router-dom";
import "./Aboutus.css";
import ContactFormModal from "./ContactFormModal";

// import "../../Components/Navbar/Navbar.css";
// import "../../Components/Footer/Footer.css";

const AboutUs = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      {/* <nav
        style={{
          background: "#2c2e4a",
          padding: "10px 30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
          marginBottom: "32px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={logoDefault}
            alt="Carvilla Logo"
            style={{ height: "40px", marginRight: "12px" }}
          />
          <span
            style={{ color: "white", fontWeight: "bold", fontSize: "1.3rem" }}
          >
            CARVILLA
          </span>
        </div>
        <div style={{ display: "flex", gap: "18px" }}>
          <Link
            to="/"
            style={{ color: "white", textDecoration: "none", fontWeight: 500 }}
          >
            Home
          </Link>
          <button
            onClick={() => navigate("/login")}
            style={{
              background: "#fff",
              color: "#2c2e4a",
              border: "none",
              borderRadius: "4px",
              padding: "6px 16px",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Login
          </button>
          <button
            onClick={() => navigate("/signup")}
            style={{
              background: "#ff4d4f",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              padding: "6px 16px",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Signup
          </button>
        </div>
      </nav> */}

      <div className="about-us-container">
        <main className="about-main">
          <section
            className="description animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <p className="description-text">
              Welcome to CarVilla, your premier destination for all things cars!
              We are passionate about connecting car enthusiasts with their
              dream vehicles, offering a wide range of models, expert advice,
              and top-notch services.
            </p>
          </section>

          <div className="mission-vision-grid">
            <section
              className="card animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <h2 className="card-title">Our Mission</h2>
              <p className="card-text">
                To provide the best car-buying experience with transparency,
                quality, and customer satisfaction.
              </p>
            </section>
            <section
              className="card animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <h2 className="card-title">Our Vision</h2>
              <p className="card-text">
                To be the leading platform for car enthusiasts, delivering
                innovation and excellence in the automotive industry.
              </p>
            </section>
          </div>

          <section className="team-section">
            <h2
              className="section-title animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              Meet the Team
            </h2>
            <div className="team-grid">
              <div
                className="team-card animate-fade-in"
                style={{ animationDelay: "0.6s" }}
              >
                <h3 className="team-name">John Doe</h3>
                <p className="team-role">Founder & CEO</p>
                <p className="team-bio">
                  John leads CarVilla with a passion for cars and a commitment
                  to excellence.
                </p>
              </div>
              <div
                className="team-card animate-fade-in"
                style={{ animationDelay: "0.7s" }}
              >
                <h3 className="team-name">Jane Smith</h3>
                <p className="team-role">Chief Mechanic</p>
                <p className="team-bio">
                  Jane ensures every vehicle meets our high standards with her
                  expertise.
                </p>
              </div>
              <div
                className="team-card animate-fade-in"
                style={{ animationDelay: "0.8s" }}
              >
                <h3 className="team-name">Mike Johnson</h3>
                <p className="team-role">Sales Manager</p>
                <p className="team-bio">
                  Mike helps customers find their perfect car with a smile.
                </p>
              </div>
            </div>
          </section>

          <section
            className="contact-section animate-fade-in"
            style={{ animationDelay: "0.9s" }}
          >
            <button
              className="contact-button"
              onClick={() => setShowModal(true)}
            >
              Contact Us
            </button>
          </section>
        </main>
      </div>
      <ContactFormModal show={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default AboutUs;
